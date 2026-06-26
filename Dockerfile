# syntax=docker/dockerfile:1
# Standalone FastAPI backend Dockerfile
# Build context: backend/ folder

FROM python:3.11-slim-bookworm

ARG USE_CUDA=false
ARG USE_OLLAMA=false
ARG USE_CUDA_VER=cu128
ARG USE_SLIM=true
ARG USE_PERMISSION_HARDENING=false
ARG USE_EMBEDDING_MODEL=sentence-transformers/all-MiniLM-L6-v2
ARG USE_RERANKING_MODEL=""
ARG USE_AUXILIARY_EMBEDDING_MODEL=TaylorAI/bge-micro-v2
ARG UID=1000
ARG GID=1000
ARG BUILD_HASH=local-build

ENV PYTHONUNBUFFERED=1
ENV HOME=/root
ENV UV_LINK_MODE=copy

# Create user/group if not root
RUN if [ $UID -ne 0 ]; then \
    if [ $GID -ne 0 ]; then \
    addgroup --gid $GID app; \
    fi; \
    adduser --uid $UID --gid $GID --home $HOME --disabled-password --no-create-home app; \
    fi

RUN mkdir -p /app/backend /app/build $HOME/.cache/chroma
RUN echo -n 00000000-0000-0000-0000-000000000000 > $HOME/.cache/chroma/telemetry_user_id
RUN chown -R $UID:$GID /app/backend /app/build $HOME

# System dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    git build-essential pandoc gcc netcat-openbsd curl jq \
    libmariadb-dev \
    python3-dev \
    ffmpeg libsm6 libxext6 zstd \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app/backend

# Install Python dependencies
COPY requirements.txt ./requirements.txt

RUN set -e; \
    pip3 install --no-cache-dir uv; \
    if [ "$USE_CUDA" = "true" ]; then \
    pip3 install 'torch<=2.9.1' torchvision torchaudio --index-url https://download.pytorch.org/whl/$USE_CUDA_DOCKER_VER --no-cache-dir; \
    uv pip install --system -r requirements.txt --no-cache-dir; \
    python -c "import os; from sentence_transformers import SentenceTransformer; SentenceTransformer(os.environ['RAG_EMBEDDING_MODEL'], device='cpu')"; \
    python -c "import os; from faster_whisper import WhisperModel; WhisperModel(os.environ['WHISPER_MODEL'], device='cpu', compute_type='int8', download_root=os.environ['WHISPER_MODEL_DIR'])"; \
    python -c "import os; import tiktoken; tiktoken.get_encoding(os.environ['TIKTOKEN_ENCODING_NAME'])"; \
    python -c "import nltk; nltk.download('punkt_tab')"; \
    else \
    pip3 install 'torch<=2.9.1' torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu --no-cache-dir; \
    uv pip install --system -r requirements.txt --no-cache-dir; \
    if [ "$USE_SLIM" != "true" ]; then \
    python -c "import os; from sentence_transformers import SentenceTransformer; SentenceTransformer(os.environ['RAG_EMBEDDING_MODEL'], device='cpu')"; \
    python -c "import os; from faster_whisper import WhisperModel; WhisperModel(os.environ['WHISPER_MODEL'], device='cpu', compute_type='int8', download_root=os.environ['WHISPER_MODEL_DIR'])"; \
    python -c "import os; import tiktoken; tiktoken.get_encoding(os.environ['TIKTOKEN_ENCODING_NAME'])"; \
    python -c "import nltk; nltk.download('punkt_tab')"; \
    fi; \
    fi; \
    mkdir -p /app/backend/data; chown -R $UID:$GID /app/backend/data/; \
    rm -rf /var/lib/apt/lists/*;

# Install Ollama if requested
RUN if [ "$USE_OLLAMA" = "true" ]; then \
    date +%s > /tmp/ollama_build_hash && \
    echo "Cache broken at timestamp: $(cat /tmp/ollama_build_hash)" && \
    curl -fsSL https://ollama.com/install.sh | sh && \
    rm -rf /var/lib/apt/lists/*; \
    fi

# Copy backend source
COPY open_webui/ /app/backend/open_webui/
COPY start.sh /app/backend/start.sh
RUN chmod +x /app/backend/start.sh

EXPOSE 7860

HEALTHCHECK CMD curl --silent --fail http://localhost:${PORT:-7860}/health | jq -ne 'input.status == true' || exit 1

RUN if [ "$USE_PERMISSION_HARDENING" = "true" ]; then \
    set -eux; \
    chgrp -R 0 /app /root || true; \
    chmod -R g+rwX /app /root || true; \
    find /app -type d -exec chmod g+s {} + || true; \
    find /root -type d -exec chmod g+s {} + || true; \
    fi

USER $UID:$GID

ENV ENV=prod \
    PORT=7860 \
    HOST=0.0.0.0 \
    USE_OLLAMA_DOCKER=${USE_OLLAMA} \
    USE_CUDA_DOCKER=${USE_CUDA} \
    USE_SLIM_DOCKER=${USE_SLIM} \
    USE_CUDA_DOCKER_VER=${USE_CUDA_VER} \
    USE_EMBEDDING_MODEL_DOCKER=${USE_EMBEDDING_MODEL} \
    USE_RERANKING_MODEL_DOCKER=${USE_RERANKING_MODEL} \
    USE_AUXILIARY_EMBEDDING_MODEL_DOCKER=${USE_AUXILIARY_EMBEDDING_MODEL} \
    OLLAMA_BASE_URL="/ollama" \
    OPENAI_API_BASE_URL="" \
    OPENAI_API_KEY="" \
    WEBUI_SECRET_KEY="" \
    SCARF_NO_ANALYTICS=true \
    DO_NOT_TRACK=true \
    ANONYMIZED_TELEMETRY=false \
    WHISPER_MODEL="base" \
    WHISPER_MODEL_DIR="/app/backend/data/cache/whisper/models" \
    RAG_EMBEDDING_MODEL=${USE_EMBEDDING_MODEL} \
    RAG_RERANKING_MODEL=${USE_RERANKING_MODEL} \
    AUXILIARY_EMBEDDING_MODEL=${USE_AUXILIARY_EMBEDDING_MODEL} \
    SENTENCE_TRANSFORMERS_HOME="/app/backend/data/cache/embedding/models" \
    TIKTOKEN_ENCODING_NAME="cl100k_base" \
    TIKTOKEN_CACHE_DIR="/app/backend/data/cache/tiktoken" \
    HF_HOME="/app/backend/data/cache/embedding/models" \
    WEBUI_BUILD_VERSION=${BUILD_HASH} \
    DOCKER=true

CMD ["bash", "/app/backend/start.sh"]

const APP_NAME = "Omnichat";
const WEBUI_BASE_URL = ``;
const WEBUI_API_BASE_URL = `${WEBUI_BASE_URL}/api/v1`;
const OLLAMA_API_BASE_URL = `${WEBUI_BASE_URL}/ollama`;
const OPENAI_API_BASE_URL = `${WEBUI_BASE_URL}/openai`;
const AUDIO_API_BASE_URL = `${WEBUI_BASE_URL}/api/v1/audio`;
const IMAGES_API_BASE_URL = `${WEBUI_BASE_URL}/api/v1/images`;
const RETRIEVAL_API_BASE_URL = `${WEBUI_BASE_URL}/api/v1/retrieval`;
const WEBUI_VERSION = "0.9.6";
const WEBUI_BUILD_HASH = "dev-build";
const DEFAULT_CAPABILITIES = {
  file_context: true,
  vision: true,
  file_upload: true,
  web_search: true,
  image_generation: true,
  code_interpreter: true,
  terminal: true,
  citations: true,
  status_updates: true,
  usage: void 0,
  builtin_tools: true
};
const PASTED_TEXT_CHARACTER_LIMIT = 1e3;
export {
  AUDIO_API_BASE_URL as A,
  DEFAULT_CAPABILITIES as D,
  IMAGES_API_BASE_URL as I,
  OPENAI_API_BASE_URL as O,
  PASTED_TEXT_CHARACTER_LIMIT as P,
  RETRIEVAL_API_BASE_URL as R,
  WEBUI_VERSION as W,
  WEBUI_BASE_URL as a,
  WEBUI_API_BASE_URL as b,
  OLLAMA_API_BASE_URL as c,
  APP_NAME as d,
  WEBUI_BUILD_HASH as e
};

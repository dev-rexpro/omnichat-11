import { c as OLLAMA_API_BASE_URL } from "./Cjpn_aRT.js";
import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { t as template_effect, a as append, F as from_svg } from "./CISwU846.js";
import { s as set_class, c as clsx, a as set_attribute } from "./CpNYkTX2.js";
import { p as prop } from "./BFaWdt2I.js";
const verifyOllamaConnection = async (token = "", connection = {}) => {
  let error = null;
  const res = await fetch(`${OLLAMA_API_BASE_URL}/verify`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...connection
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    var _a;
    error = `Ollama: ${((_a = err == null ? void 0 : err.error) == null ? void 0 : _a.message) ?? "Network Problem"}`;
    return [];
  });
  if (error) {
    throw error;
  }
  return res;
};
const getOllamaConfig = async (token = "") => {
  let error = null;
  const res = await fetch(`${OLLAMA_API_BASE_URL}/config`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = "Server connection failed";
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateOllamaConfig = async (token = "", config) => {
  let error = null;
  const res = await fetch(`${OLLAMA_API_BASE_URL}/config/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      ...config
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = "Server connection failed";
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getOllamaVersion = async (token, urlIdx) => {
  let error = null;
  const res = await fetch(`${OLLAMA_API_BASE_URL}/api/version${""}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = "Server connection failed";
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return (res == null ? void 0 : res.version) ?? false;
};
const getOllamaModels = async (token = "", urlIdx = null) => {
  let error = null;
  const res = await fetch(`${OLLAMA_API_BASE_URL}/api/tags${urlIdx !== null ? `/${urlIdx}` : ""}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = "Server connection failed";
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return ((res == null ? void 0 : res.models) ?? []).map((model) => ({ id: model.model, name: model.name ?? model.model, ...model })).sort((a, b) => {
    return ((a == null ? void 0 : a.name) ?? (a == null ? void 0 : a.id) ?? "").localeCompare((b == null ? void 0 : b.name) ?? (b == null ? void 0 : b.id) ?? "");
  });
};
const createModel = async (token, payload, urlIdx = null) => {
  let error = null;
  const res = await fetch(
    `${OLLAMA_API_BASE_URL}/api/create${urlIdx !== null ? `/${urlIdx}` : ""}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    }
  ).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const deleteModel = async (token, tagName, urlIdx = null) => {
  let error = null;
  const res = await fetch(
    `${OLLAMA_API_BASE_URL}/api/delete${urlIdx !== null ? `/${urlIdx}` : ""}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        model: tagName
      })
    }
  ).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return true;
  }).catch((err) => {
    error = err;
    if ("detail" in err) {
      error = err.detail;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const pullModel = async (token, tagName, urlIdx = null) => {
  let error = null;
  const controller = new AbortController();
  const res = await fetch(`${OLLAMA_API_BASE_URL}/api/pull${urlIdx !== null ? `/${urlIdx}` : ""}`, {
    signal: controller.signal,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      name: tagName
    })
  }).catch((err) => {
    error = err;
    if ("detail" in err) {
      error = err.detail;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return [res, controller];
};
const downloadModel = async (token, download_url, urlIdx = null) => {
  let error = null;
  const res = await fetch(
    `${OLLAMA_API_BASE_URL}/models/download${urlIdx !== null ? `/${urlIdx}` : ""}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        url: download_url
      })
    }
  ).catch((err) => {
    error = err;
    if ("detail" in err) {
      error = err.detail;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const uploadModel = async (token, file, urlIdx = null) => {
  let error = null;
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch(
    `${OLLAMA_API_BASE_URL}/models/upload${urlIdx !== null ? `/${urlIdx}` : ""}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    }
  ).catch((err) => {
    error = err;
    if ("detail" in err) {
      error = err.detail;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
var root = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4C6 4 6 8 6 10C4.33333 10 1 11 1 15C1 19 4.33333 20 6 20H18C19.6667 20 23 19 23 15C23 11 19.6667 10 18 10C18 8 18 4 12 4Z" stroke-linejoin="round"></path></svg>`);
function Cloud($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root();
  template_effect(() => {
    set_class(svg, 0, clsx(className()));
    set_attribute(svg, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
}
export {
  Cloud as C,
  downloadModel as a,
  getOllamaConfig as b,
  createModel as c,
  deleteModel as d,
  updateOllamaConfig as e,
  getOllamaVersion as f,
  getOllamaModels as g,
  pullModel as p,
  uploadModel as u,
  verifyOllamaConnection as v
};

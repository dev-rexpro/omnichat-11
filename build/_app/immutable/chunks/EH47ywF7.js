import { _ as __vitePreload } from "./CQrtv1eE.js";
import { a as WEBUI_BASE_URL } from "./Cjpn_aRT.js";
import { a as convertOpenApiToToolPayload } from "./7pK2BKln.js";
import { g as getOpenAIModelsDirect } from "./CFWt9TKA.js";
const TOOL_SERVER_FETCH_TIMEOUT = 1e4;
const OPENAPI_HTTP_METHODS = /* @__PURE__ */ new Set([
  "get",
  "put",
  "post",
  "delete",
  "options",
  "head",
  "patch",
  "trace"
]);
const getModels = async (token = "", connections = null, base = false, refresh = false) => {
  const searchParams = new URLSearchParams();
  if (refresh) {
    searchParams.append("refresh", "true");
  }
  let error = null;
  const res = await fetch(
    `${WEBUI_BASE_URL}/api/models${base ? "/base" : ""}?${searchParams.toString()}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...token && { authorization: `Bearer ${token}` }
      }
    }
  ).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  let models = (res == null ? void 0 : res.data) ?? [];
  if (connections && !base) {
    let localModels = [];
    if (connections) {
      const OPENAI_API_BASE_URLS = connections.OPENAI_API_BASE_URLS;
      const OPENAI_API_KEYS = connections.OPENAI_API_KEYS;
      const OPENAI_API_CONFIGS = connections.OPENAI_API_CONFIGS;
      const requests = [];
      for (const idx in OPENAI_API_BASE_URLS) {
        const url = OPENAI_API_BASE_URLS[idx];
        if (idx.toString() in OPENAI_API_CONFIGS) {
          const apiConfig = OPENAI_API_CONFIGS[idx.toString()] ?? {};
          const enable = (apiConfig == null ? void 0 : apiConfig.enable) ?? true;
          const modelIds = (apiConfig == null ? void 0 : apiConfig.model_ids) ?? [];
          if (enable) {
            if (modelIds.length > 0) {
              const modelList = {
                object: "list",
                data: modelIds.map((modelId) => ({
                  id: modelId,
                  name: modelId,
                  owned_by: "openai",
                  openai: { id: modelId },
                  urlIdx: idx
                }))
              };
              requests.push(
                (async () => {
                  return modelList;
                })()
              );
            } else {
              requests.push(
                (async () => {
                  return await getOpenAIModelsDirect(url, OPENAI_API_KEYS[idx]).then((res2) => {
                    return res2;
                  }).catch((err) => {
                    return {
                      object: "list",
                      data: [],
                      urlIdx: idx
                    };
                  });
                })()
              );
            }
          } else {
            requests.push(
              (async () => {
                return {
                  object: "list",
                  data: [],
                  urlIdx: idx
                };
              })()
            );
          }
        }
      }
      const responses = await Promise.all(requests);
      for (const idx in responses) {
        const response = responses[idx];
        const apiConfig = OPENAI_API_CONFIGS[idx.toString()] ?? {};
        let models2 = Array.isArray(response) ? response : (response == null ? void 0 : response.data) ?? [];
        models2 = models2.map((model) => ({ ...model, openai: { id: model.id }, urlIdx: idx }));
        const prefixId = apiConfig.prefix_id;
        if (prefixId) {
          for (const model of models2) {
            model.id = `${prefixId}.${model.id}`;
          }
        }
        const tags = apiConfig.tags;
        if (tags) {
          for (const model of models2) {
            model.tags = tags;
          }
        }
        localModels = localModels.concat(models2);
      }
    }
    models = models.concat(
      localModels.map((model) => ({
        ...model,
        name: (model == null ? void 0 : model.name) ?? (model == null ? void 0 : model.id),
        direct: true
      }))
    );
    const modelsMap = {};
    for (const model of models) {
      modelsMap[model.id] = model;
    }
    models = Object.values(modelsMap);
  }
  return models;
};
const unloadModel = async (token, model) => {
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/models/unload`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({ model })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = err;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const chatAction = async (token, action_id, body) => {
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/chat/actions/${action_id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify(body)
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = err;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const stopTask = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/tasks/stop/${id}`, {
    method: "POST",
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
      error = err;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const stopTasksByChatId = async (token, chat_id) => {
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/tasks/chat/${encodeURIComponent(chat_id)}/stop`, {
    method: "POST",
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
      error = err;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getTaskIdsByChatId = async (token, chat_id) => {
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/tasks/chat/${encodeURIComponent(chat_id)}`, {
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
      error = err;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getToolServerData = async (token, url) => {
  let error = null;
  const res = await fetch(`${url}`, {
    signal: AbortSignal.timeout(TOOL_SERVER_FETCH_TIMEOUT),
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (url.toLowerCase().endsWith(".yaml") || url.toLowerCase().endsWith(".yml")) {
      if (!res2.ok) throw await res2.text();
      const [text, { parse }] = await Promise.all([res2.text(), __vitePreload(() => import("./BZpfqD3S.js"), true ? [] : void 0, import.meta.url)]);
      return parse(text);
    } else {
      if (!res2.ok) throw await res2.json();
      return res2.json();
    }
  }).catch((err) => {
    if ((err == null ? void 0 : err.name) === "TimeoutError") {
      error = `Connection to ${url} timed out`;
    } else if ("detail" in err) {
      error = err.detail;
    } else {
      error = err;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getToolServersData = async (servers) => {
  return (await Promise.all(
    servers.filter((server) => {
      var _a;
      return (_a = server == null ? void 0 : server.config) == null ? void 0 : _a.enable;
    }).map(async (server) => {
      var _a;
      let error = null;
      let toolServerToken = null;
      const auth_type = (server == null ? void 0 : server.auth_type) ?? "bearer";
      if (auth_type === "bearer") {
        toolServerToken = server == null ? void 0 : server.key;
      } else if (auth_type === "none") ;
      else if (auth_type === "session") {
        toolServerToken = localStorage.token;
      }
      let res = null;
      const specType = (server == null ? void 0 : server.spec_type) ?? "url";
      if (specType === "url") {
        res = await getToolServerData(
          toolServerToken,
          ((server == null ? void 0 : server.path) ?? "").includes("://") ? server == null ? void 0 : server.path : `${server == null ? void 0 : server.url}${((server == null ? void 0 : server.path) ?? "").startsWith("/") ? "" : "/"}${server == null ? void 0 : server.path}`
        ).catch((err) => {
          error = err;
          return null;
        });
      } else if ((specType === "json" && (server == null ? void 0 : server.spec)) ?? null) {
        try {
          res = JSON.parse(server == null ? void 0 : server.spec);
        } catch (e) {
          error = "Failed to parse JSON spec";
        }
      }
      if (res) {
        if (!res.paths) {
          return {
            error: "Invalid OpenAPI spec",
            url: server == null ? void 0 : server.url
          };
        }
        const { openapi, info, specs } = {
          openapi: res,
          info: res.info,
          specs: convertOpenApiToToolPayload(res)
        };
        const result = {
          url: server == null ? void 0 : server.url,
          openapi,
          info,
          specs
        };
        try {
          const baseUrl = ((server == null ? void 0 : server.url) ?? "").replace(/\/$/, "");
          const configRes = await fetch(`${baseUrl}/api/config`, {
            signal: AbortSignal.timeout(TOOL_SERVER_FETCH_TIMEOUT)
          });
          if (configRes.ok) {
            const config = await configRes.json();
            if ((_a = config == null ? void 0 : config.features) == null ? void 0 : _a.system) {
              const headers = {};
              if (toolServerToken) {
                headers["Authorization"] = `Bearer ${toolServerToken}`;
              }
              const systemRes = await fetch(`${baseUrl}/system`, {
                signal: AbortSignal.timeout(TOOL_SERVER_FETCH_TIMEOUT),
                headers
              });
              if (systemRes.ok) {
                const systemData = await systemRes.json();
                if (systemData == null ? void 0 : systemData.prompt) {
                  result.system_prompt = systemData.prompt;
                }
              }
            }
          }
        } catch (e) {
        }
        return result;
      } else if (error) {
        return {
          error,
          url: server == null ? void 0 : server.url
        };
      } else {
        return null;
      }
    })
  )).filter((server) => server);
};
const executeToolServer = async (token, url, name, params, serverData, sessionId) => {
  var _a, _b;
  let error = null;
  try {
    const matchingRoute = Object.entries(serverData.openapi.paths).find(
      ([_, methods2]) => Object.entries(methods2).some(
        ([method, operation2]) => OPENAPI_HTTP_METHODS.has(method) && operation2 && typeof operation2 === "object" && operation2.operationId === name
      )
    );
    if (!matchingRoute) {
      throw new Error(`No matching route found for operationId: ${name}`);
    }
    const [routePath, methods] = matchingRoute;
    const methodEntry = Object.entries(methods).find(
      ([method, operation2]) => OPENAPI_HTTP_METHODS.has(method) && operation2 && typeof operation2 === "object" && operation2.operationId === name
    );
    if (!methodEntry) {
      throw new Error(`No matching method found for operationId: ${name}`);
    }
    const [httpMethod, operation] = methodEntry;
    const pathLevelParams = Array.isArray(methods.parameters) ? methods.parameters : [];
    const opParams = Array.isArray(operation.parameters) ? operation.parameters : [];
    const mergedParams = /* @__PURE__ */ new Map();
    for (const param of pathLevelParams) {
      if (param == null ? void 0 : param.name) mergedParams.set(`${param.name}:${param.in ?? ""}`, param);
    }
    for (const param of opParams) {
      if (param == null ? void 0 : param.name) mergedParams.set(`${param.name}:${param.in ?? ""}`, param);
    }
    const pathParams = {};
    const queryParams = {};
    let bodyParams = {};
    for (const param of mergedParams.values()) {
      const paramName = param == null ? void 0 : param.name;
      if (!paramName) continue;
      const paramIn = param == null ? void 0 : param.in;
      if (params.hasOwnProperty(paramName)) {
        if (paramIn === "path") {
          pathParams[paramName] = params[paramName];
        } else if (paramIn === "query") {
          queryParams[paramName] = params[paramName];
        }
      }
    }
    let finalUrl = `${url}${routePath}`;
    Object.entries(pathParams).forEach(([key, value]) => {
      finalUrl = finalUrl.replace(new RegExp(`{${key}}`, "g"), encodeURIComponent(value));
    });
    if (Object.keys(queryParams).length > 0) {
      const queryString = new URLSearchParams(
        Object.entries(queryParams).map(([k, v]) => [k, String(v)])
      ).toString();
      finalUrl += `?${queryString}`;
    }
    if (operation.requestBody && operation.requestBody.content) {
      const contentType2 = Object.keys(operation.requestBody.content)[0];
      if (params !== void 0) {
        bodyParams = params;
      } else {
        throw new Error(`Request body expected for operation '${name}' but none found.`);
      }
    }
    const headers = {
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    };
    if (sessionId) headers["X-Session-Id"] = sessionId;
    const requestOptions = {
      method: httpMethod.toUpperCase(),
      headers
    };
    if (["post", "put", "patch", "delete"].includes(httpMethod.toLowerCase()) && operation.requestBody) {
      requestOptions.body = JSON.stringify(bodyParams);
    }
    const res = await fetch(finalUrl, requestOptions);
    if (!res.ok) {
      const resText = await res.text();
      throw new Error(`HTTP error! Status: ${res.status}. Message: ${resText}`);
    }
    const responseHeaders = {};
    res.headers.forEach((value, key) => {
      responseHeaders[key] = value;
    });
    let responseData;
    const contentType = ((_b = (_a = res.headers.get("Content-Type")) == null ? void 0 : _a.split(";")[0]) == null ? void 0 : _b.trim()) ?? "";
    try {
      responseData = await res.clone().json();
    } catch {
      if (contentType.startsWith("text/") || !contentType) {
        responseData = await res.text();
      } else {
        const buf = await res.arrayBuffer();
        const bytes = new Uint8Array(buf);
        let binary = "";
        for (let i = 0; i < bytes.length; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        const b64 = btoa(binary);
        responseData = `data:${contentType};base64,${b64}`;
      }
    }
    return [responseData, responseHeaders];
  } catch (err) {
    error = err.message;
    return [{ error }, null];
  }
};
const getTaskConfig = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/v1/tasks/config`, {
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
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateTaskConfig = async (token, config) => {
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/v1/tasks/config/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify(config)
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = err;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const generateTitle = async (token = "", model, messages, chat_id) => {
  var _a, _b;
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/v1/tasks/title/completions`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      model,
      messages,
      ...chat_id
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    if ("detail" in err) {
      error = err.detail;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  try {
    const response = ((_b = (_a = res == null ? void 0 : res.choices[0]) == null ? void 0 : _a.message) == null ? void 0 : _b.content) ?? "";
    const sanitizedResponse = response.replace(/['‘’`]/g, '"');
    const jsonStartIndex = sanitizedResponse.indexOf("{");
    const jsonEndIndex = sanitizedResponse.lastIndexOf("}");
    if (jsonStartIndex !== -1 && jsonEndIndex !== -1) {
      const jsonResponse = sanitizedResponse.substring(jsonStartIndex, jsonEndIndex + 1);
      const parsed = JSON.parse(jsonResponse);
      if (parsed && parsed.title) {
        return parsed.title;
      } else {
        return null;
      }
    }
    return null;
  } catch (e) {
    return null;
  }
};
const generateTags = async (token = "", model, messages, chat_id) => {
  var _a, _b;
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/v1/tasks/tags/completions`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      model,
      messages,
      ...chat_id && { chat_id }
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    if ("detail" in err) {
      error = err.detail;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  try {
    const response = ((_b = (_a = res == null ? void 0 : res.choices[0]) == null ? void 0 : _a.message) == null ? void 0 : _b.content) ?? "";
    const sanitizedResponse = response.replace(/['‘’`]/g, '"');
    const jsonStartIndex = sanitizedResponse.indexOf("{");
    const jsonEndIndex = sanitizedResponse.lastIndexOf("}");
    if (jsonStartIndex !== -1 && jsonEndIndex !== -1) {
      const jsonResponse = sanitizedResponse.substring(jsonStartIndex, jsonEndIndex + 1);
      const parsed = JSON.parse(jsonResponse);
      if (parsed && parsed.tags) {
        return Array.isArray(parsed.tags) ? parsed.tags : [];
      } else {
        return [];
      }
    }
    return [];
  } catch (e) {
    return [];
  }
};
const generateEmoji = async (token = "", model, prompt, chat_id) => {
  var _a, _b;
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/v1/tasks/emoji/completions`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      model,
      prompt,
      ...chat_id && { chat_id }
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    if ("detail" in err) {
      error = err.detail;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  const response = ((_b = (_a = res == null ? void 0 : res.choices[0]) == null ? void 0 : _a.message) == null ? void 0 : _b.content.replace(/["']/g, "")) ?? null;
  if (response) {
    if (new RegExp("\\p{Extended_Pictographic}", "u").test(response)) {
      return response.match(new RegExp("\\p{Extended_Pictographic}", "gu"))[0];
    }
  }
  return null;
};
const generateAutoCompletion = async (token = "", model, prompt, messages, type = "search query", chat_id) => {
  var _a, _b;
  const controller = new AbortController();
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/v1/tasks/auto/completions`, {
    signal: controller.signal,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      model,
      prompt,
      ...messages && { messages },
      type,
      stream: false,
      ...chat_id
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    if ("detail" in err) {
      error = err.detail;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  const response = ((_b = (_a = res == null ? void 0 : res.choices[0]) == null ? void 0 : _a.message) == null ? void 0 : _b.content) ?? "";
  try {
    const jsonStartIndex = response.indexOf("{");
    const jsonEndIndex = response.lastIndexOf("}");
    if (jsonStartIndex !== -1 && jsonEndIndex !== -1) {
      const jsonResponse = response.substring(jsonStartIndex, jsonEndIndex + 1);
      const parsed = JSON.parse(jsonResponse);
      if (parsed && parsed.text) {
        return parsed.text;
      } else {
        return "";
      }
    }
    return response;
  } catch (e) {
    return response;
  }
};
const generateMoACompletion = async (token = "", model, prompt, responses) => {
  const controller = new AbortController();
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/v1/tasks/moa/completions`, {
    signal: controller.signal,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      model,
      prompt,
      responses,
      stream: true
    })
  }).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return [res, controller];
};
const getPipelinesList = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/v1/pipelines/list`, {
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
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  const pipelines = (res == null ? void 0 : res.data) ?? [];
  return pipelines;
};
const uploadPipeline = async (token, file, urlIdx) => {
  let error = null;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("urlIdx", urlIdx);
  const res = await fetch(`${WEBUI_BASE_URL}/api/v1/pipelines/upload`, {
    method: "POST",
    headers: {
      ...token && { authorization: `Bearer ${token}` }
      // 'Content-Type': 'multipart/form-data' is not needed as Fetch API will set it automatically
    },
    body: formData
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = err;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const downloadPipeline = async (token, url, urlIdx) => {
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/v1/pipelines/add`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      url,
      urlIdx
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = err;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const deletePipeline = async (token, id, urlIdx) => {
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/v1/pipelines/delete`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      id,
      urlIdx
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = err;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getPipelines = async (token, urlIdx) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (urlIdx !== void 0) {
    searchParams.append("urlIdx", urlIdx);
  }
  const res = await fetch(`${WEBUI_BASE_URL}/api/v1/pipelines/?${searchParams.toString()}`, {
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
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  const pipelines = (res == null ? void 0 : res.data) ?? [];
  return pipelines;
};
const getPipelineValves = async (token, pipeline_id, urlIdx) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (urlIdx !== void 0) {
    searchParams.append("urlIdx", urlIdx);
  }
  const res = await fetch(
    `${WEBUI_BASE_URL}/api/v1/pipelines/${pipeline_id}/valves?${searchParams.toString()}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...token && { authorization: `Bearer ${token}` }
      }
    }
  ).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getPipelineValvesSpec = async (token, pipeline_id, urlIdx) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (urlIdx !== void 0) {
    searchParams.append("urlIdx", urlIdx);
  }
  const res = await fetch(
    `${WEBUI_BASE_URL}/api/v1/pipelines/${pipeline_id}/valves/spec?${searchParams.toString()}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...token && { authorization: `Bearer ${token}` }
      }
    }
  ).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updatePipelineValves = async (token = "", pipeline_id, valves, urlIdx) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (urlIdx !== void 0) {
    searchParams.append("urlIdx", urlIdx);
  }
  const res = await fetch(
    `${WEBUI_BASE_URL}/api/v1/pipelines/${pipeline_id}/valves/update?${searchParams.toString()}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...token && { authorization: `Bearer ${token}` }
      },
      body: JSON.stringify(valves)
    }
  ).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = err;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getUsage = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/usage`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...token && { Authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getBackendConfig = async () => {
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/config`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    if (error instanceof TypeError) {
      try {
        const probeRes = await fetch(`${WEBUI_BASE_URL}/api/config`, {
          method: "GET",
          credentials: "include",
          redirect: "manual",
          headers: { "Content-Type": "application/json" }
        });
        if (probeRes.type === "opaqueredirect" || probeRes.status >= 300 && probeRes.status < 400) {
          throw { authRedirect: true };
        }
      } catch (probeErr) {
        if (probeErr == null ? void 0 : probeErr.authRedirect) throw probeErr;
      }
    }
    throw error;
  }
  return res;
};
const getVersion = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/version`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getVersionUpdates = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/version/updates`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getWebhookUrl = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/webhook`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return res.url;
};
const updateWebhookUrl = async (token, url) => {
  let error = null;
  const res = await fetch(`${WEBUI_BASE_URL}/api/webhook`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      url
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return res.url;
};
export {
  stopTask as A,
  getTaskIdsByChatId as B,
  chatAction as C,
  generateMoACompletion as D,
  getBackendConfig as a,
  getToolServerData as b,
  getUsage as c,
  getVersion as d,
  executeToolServer as e,
  generateTags as f,
  getModels as g,
  getWebhookUrl as h,
  getVersionUpdates as i,
  getPipelinesList as j,
  updatePipelineValves as k,
  getPipelines as l,
  getPipelineValvesSpec as m,
  getPipelineValves as n,
  uploadPipeline as o,
  downloadPipeline as p,
  deletePipeline as q,
  getTaskConfig as r,
  updateTaskConfig as s,
  generateTitle as t,
  updateWebhookUrl as u,
  getToolServersData as v,
  generateAutoCompletion as w,
  unloadModel as x,
  generateEmoji as y,
  stopTasksByChatId as z
};

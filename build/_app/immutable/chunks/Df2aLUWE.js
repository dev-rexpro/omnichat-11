import { b as WEBUI_API_BASE_URL } from "./Cjpn_aRT.js";
const createNewPrompt = async (token, prompt) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/prompts/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...prompt,
      command: prompt.command.startsWith("/") ? prompt.command.slice(1) : prompt.command
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getPrompts = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/prompts/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getPromptTags = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/prompts/tags`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getPromptItems = async (token = "", query, viewOption, selectedTag, orderBy, direction, page) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (query) {
    searchParams.append("query", query);
  }
  if (viewOption) {
    searchParams.append("view_option", viewOption);
  }
  if (selectedTag) {
    searchParams.append("tag", selectedTag);
  }
  if (page) {
    searchParams.append("page", page.toString());
  }
  const res = await fetch(`${WEBUI_API_BASE_URL}/prompts/list?${searchParams.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getPromptById = async (token, promptId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/prompts/id/${promptId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updatePromptById = async (token, prompt) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/prompts/id/${prompt.id}/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(prompt)
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updatePromptMetadata = async (token, promptId, name, command, tags = []) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/prompts/id/${promptId}/update/meta`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ name, command, tags })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const setProductionPromptVersion = async (token, promptId, version_id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/prompts/id/${promptId}/update/version`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      version_id
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const togglePromptById = async (token, promptId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/prompts/id/${promptId}/toggle`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const deletePromptById = async (token, promptId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/prompts/id/${promptId}/delete`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updatePromptAccessGrants = async (token, promptId, accessGrants) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/prompts/id/${promptId}/access/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ access_grants: accessGrants })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getPromptHistory = async (token, promptId, page = 0) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/prompts/id/${promptId}/history?page=${page}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const deletePromptHistoryVersion = async (token, promptId, historyId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/prompts/id/${promptId}/history/${historyId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return false;
  });
  if (error) {
    throw error;
  }
  return res;
};
export {
  getPromptTags as a,
  updatePromptAccessGrants as b,
  createNewPrompt as c,
  getPromptHistory as d,
  updatePromptMetadata as e,
  deletePromptHistoryVersion as f,
  getPromptById as g,
  getPromptItems as h,
  deletePromptById as i,
  getPrompts as j,
  setProductionPromptVersion as s,
  togglePromptById as t,
  updatePromptById as u
};

import { b as WEBUI_API_BASE_URL } from "./Cjpn_aRT.js";
const createNewKnowledge = async (token, name, description, accessGrants) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      name,
      description,
      access_grants: accessGrants
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
const getKnowledgeBases = async (token = "", page = null) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (page) searchParams.append("page", page.toString());
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/?${searchParams.toString()}`, {
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
const searchKnowledgeBases = async (token = "", query = null, viewOption = null, page = null) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (query) searchParams.append("query", query);
  if (viewOption) searchParams.append("view_option", viewOption);
  if (page) searchParams.append("page", page.toString());
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/search?${searchParams.toString()}`, {
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
const searchKnowledgeFiles = async (token, query, viewOption, orderBy, direction, page = 1, includeContent = false) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (query) searchParams.append("query", query);
  searchParams.append("page", page.toString());
  if (includeContent) searchParams.append("include_content", "true");
  const res = await fetch(
    `${WEBUI_API_BASE_URL}/knowledge/search/files?${searchParams.toString()}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      }
    }
  ).then(async (res2) => {
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
const getKnowledgeById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/${id}`, {
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
const searchKnowledgeFilesById = async (token, id, query, viewOption, orderBy, direction, page = 1, directoryId, includeContent = false) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (query) searchParams.append("query", query);
  if (viewOption) searchParams.append("view_option", viewOption);
  if (orderBy) searchParams.append("order_by", orderBy);
  if (direction) searchParams.append("direction", direction);
  searchParams.append("page", page.toString());
  if (directoryId !== void 0) {
    searchParams.append("directory_id", directoryId ?? "");
  }
  if (includeContent) searchParams.append("include_content", "true");
  const res = await fetch(
    `${WEBUI_API_BASE_URL}/knowledge/${id}/files?${searchParams.toString()}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      }
    }
  ).then(async (res2) => {
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
const getPendingKnowledgeFiles = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/${id}/files/pending`, {
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
    return [];
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateKnowledgeById = async (token, id, form) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/${id}/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      name: (form == null ? void 0 : form.name) ? form.name : void 0,
      description: (form == null ? void 0 : form.description) ? form.description : void 0,
      data: (form == null ? void 0 : form.data) ? form.data : void 0,
      access_grants: form.access_grants
    })
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
const updateKnowledgeAccessGrants = async (token, id, accessGrants) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/${id}/access/update`, {
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
const removeFileFromKnowledgeById = async (token, id, fileId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/${id}/file/remove`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      file_id: fileId
    })
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
const resetKnowledgeById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/${id}/reset`, {
    method: "POST",
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
const syncKnowledgeDiff = async (token, id, manifest) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/${id}/sync/diff`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ manifest })
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
const syncKnowledgeCleanup = async (token, id, fileIds, dirIds = []) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/${id}/sync/cleanup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ file_ids: fileIds, dir_ids: dirIds })
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
const deleteKnowledgeById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/${id}/delete`, {
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
const reindexKnowledgeFiles = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/reindex`, {
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
const exportKnowledgeById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/${id}/export`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.blob();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const createKnowledgeDirectory = async (token, id, name, parentId) => {
  let error = null;
  const body = { name };
  if (parentId) body.parent_id = parentId;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/${id}/dirs/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(body)
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
const updateKnowledgeDirectory = async (token, id, dirId, form) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/${id}/dirs/${dirId}/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(form)
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
const deleteKnowledgeDirectory = async (token, id, dirId, moveFiles = true) => {
  let error = null;
  const searchParams = new URLSearchParams();
  searchParams.append("move_files", moveFiles.toString());
  const res = await fetch(
    `${WEBUI_API_BASE_URL}/knowledge/${id}/dirs/${dirId}/delete?${searchParams.toString()}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        authorization: `Bearer ${token}`
      }
    }
  ).then(async (res2) => {
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
const moveFileInKnowledge = async (token, id, fileId, directoryId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/${id}/file/move`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      file_id: fileId,
      directory_id: directoryId ?? null
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
export {
  searchKnowledgeFiles as a,
  syncKnowledgeDiff as b,
  createNewKnowledge as c,
  deleteKnowledgeById as d,
  exportKnowledgeById as e,
  syncKnowledgeCleanup as f,
  getKnowledgeById as g,
  createKnowledgeDirectory as h,
  deleteKnowledgeDirectory as i,
  searchKnowledgeFilesById as j,
  getPendingKnowledgeFiles as k,
  updateKnowledgeById as l,
  updateKnowledgeDirectory as m,
  moveFileInKnowledge as n,
  removeFileFromKnowledgeById as o,
  reindexKnowledgeFiles as p,
  getKnowledgeBases as q,
  resetKnowledgeById as r,
  searchKnowledgeBases as s,
  updateKnowledgeAccessGrants as u
};

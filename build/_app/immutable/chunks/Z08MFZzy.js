import { b as WEBUI_API_BASE_URL } from "./Cjpn_aRT.js";
const getConfig = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/evaluations/config`, {
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
const updateConfig = async (token, config) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/evaluations/config`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...config
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
const getLeaderboard = async (token = "", query = "") => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (query) searchParams.append("query", query);
  const res = await fetch(
    `${WEBUI_API_BASE_URL}/evaluations/leaderboard?${searchParams.toString()}`,
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
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getModelHistory = async (token = "", modelId, days = 30) => {
  let error = null;
  const searchParams = new URLSearchParams();
  searchParams.append("days", days.toString());
  const res = await fetch(
    `${WEBUI_API_BASE_URL}/evaluations/leaderboard/${encodeURIComponent(modelId)}/history?${searchParams.toString()}`,
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
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getFeedbackModelIds = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/evaluations/feedbacks/models`, {
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
const getFeedbackItems = async (token = "", orderBy, direction, page, modelId = "") => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (orderBy) searchParams.append("order_by", orderBy);
  if (direction) searchParams.append("direction", direction);
  if (page) searchParams.append("page", page.toString());
  if (modelId) searchParams.append("model_id", modelId);
  const res = await fetch(
    `${WEBUI_API_BASE_URL}/evaluations/feedbacks/list?${searchParams.toString()}`,
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
const exportAllFeedbacks = async (token = "", modelId = "") => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (modelId) searchParams.append("model_id", modelId);
  const res = await fetch(
    `${WEBUI_API_BASE_URL}/evaluations/feedbacks/all/export?${searchParams.toString()}`,
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
const createNewFeedback = async (token, feedback) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/evaluations/feedback`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...feedback
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
const getFeedbackById = async (token, feedbackId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/evaluations/feedback/${feedbackId}`, {
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
const updateFeedbackById = async (token, feedbackId, feedback) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/evaluations/feedback/${feedbackId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...feedback
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
const deleteFeedbackById = async (token, feedbackId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/evaluations/feedback/${feedbackId}`, {
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
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
export {
  getLeaderboard as a,
  getFeedbackById as b,
  getFeedbackItems as c,
  getFeedbackModelIds as d,
  exportAllFeedbacks as e,
  deleteFeedbackById as f,
  getModelHistory as g,
  createNewFeedback as h,
  getConfig as i,
  updateConfig as j,
  updateFeedbackById as u
};

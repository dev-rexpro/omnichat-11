import { I as IMAGES_API_BASE_URL } from "./Cjpn_aRT.js";
const getConfig = async (token = "") => {
  let error = null;
  const res = await fetch(`${IMAGES_API_BASE_URL}/config`, {
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
const updateConfig = async (token = "", config) => {
  let error = null;
  const res = await fetch(`${IMAGES_API_BASE_URL}/config/update`, {
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
const verifyConfigUrl = async (token = "") => {
  let error = null;
  const res = await fetch(`${IMAGES_API_BASE_URL}/config/url/verify`, {
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
const getImageGenerationModels = async (token = "") => {
  let error = null;
  const res = await fetch(`${IMAGES_API_BASE_URL}/models`, {
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
const imageGenerations = async (token = "", prompt) => {
  let error = null;
  const res = await fetch(`${IMAGES_API_BASE_URL}/generations`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      prompt
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    if ("detail" in err) {
      if (Array.isArray(err.detail)) {
        error = err.detail.map((e) => e.msg || JSON.stringify(e)).join(", ");
      } else {
        error = err.detail;
      }
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
const imageEdits = async (token = "", images, prompt, model, size, n, background) => {
  let error = null;
  const res = await fetch(`${IMAGES_API_BASE_URL}/edit`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      form_data: {
        image: images,
        prompt,
        ...model,
        ...size,
        ...n,
        ...background
      }
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    if ("detail" in err) {
      if (Array.isArray(err.detail)) {
        error = err.detail.map((e) => e.msg || JSON.stringify(e)).join(", ");
      } else {
        error = err.detail;
      }
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
export {
  imageGenerations as a,
  getImageGenerationModels as b,
  getConfig as g,
  imageEdits as i,
  updateConfig as u,
  verifyConfigUrl as v
};

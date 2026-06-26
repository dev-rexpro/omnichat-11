import { b as WEBUI_API_BASE_URL } from "./Cjpn_aRT.js";
const getAdminDetails = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/admin/details`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
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
const getAdminConfig = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/admin/config`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
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
const updateAdminConfig = async (token, body) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/admin/config`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
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
const getSessionUser = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    credentials: "include"
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
const ldapUserSignIn = async (user, password) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/ldap`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({
      user,
      password
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
const getLdapConfig = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/admin/config/ldap`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
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
const updateLdapConfig = async (token = "", enable_ldap) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/admin/config/ldap`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      enable_ldap
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
const getLdapServer = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/admin/config/ldap/server`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
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
const updateLdapServer = async (token = "", body) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/admin/config/ldap/server`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
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
const userSignIn = async (email, password) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({
      email,
      password
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
const userSignUp = async (name, email, password, profile_image_url) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({
      name,
      email,
      password,
      profile_image_url
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
const userSignOut = async () => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/signout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
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
  sessionStorage.clear();
  return res;
};
const addUser = async (token, name, email, password, role = "pending", profile_image_url = null) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      name,
      email,
      password,
      role,
      ...profile_image_url && { profile_image_url }
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
const updateUserProfile = async (token, profile) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/update/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      ...profile
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    if (Array.isArray(error)) {
      error = error.map((e) => e.msg).join("; ");
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateUserTimezone = async (token, timezone) => {
  await fetch(`${WEBUI_API_BASE_URL}/auths/update/timezone`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({ timezone })
  }).catch((err) => {
  });
};
const updateUserPassword = async (token, password, newPassword) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/update/password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      password,
      new_password: newPassword
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
const createAPIKey = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/api_key`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
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
  return res.api_key;
};
const getAPIKey = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/auths/api_key`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
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
  return res.api_key;
};
const deleteOAuthSession = async (token, provider) => {
  let error = null;
  const res = await fetch(
    `${WEBUI_API_BASE_URL}/auths/oauth/sessions/${encodeURIComponent(provider)}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
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
export {
  updateUserTimezone as a,
  userSignUp as b,
  userSignOut as c,
  addUser as d,
  getAdminConfig as e,
  getLdapServer as f,
  getSessionUser as g,
  getLdapConfig as h,
  updateAdminConfig as i,
  updateLdapConfig as j,
  updateLdapServer as k,
  ldapUserSignIn as l,
  updateUserPassword as m,
  getAPIKey as n,
  updateUserProfile as o,
  createAPIKey as p,
  getAdminDetails as q,
  deleteOAuthSession as r,
  userSignIn as u
};

let BASE_URL = process.env.REACT_APP_BACKEND_URL;

const apiPOST = async (api, body) => {
  const res = await fetch(`${BASE_URL}/${api}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
    },
    body: JSON.stringify(body),
  });

  return await res.json();
};
const apiPOST_Tokenless = async (api, body) => {
  const res = await fetch(`${BASE_URL}/${api}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
};
const apiGET = async (api, query = {}) => {
  let API_URL = `${BASE_URL}/${api}`;
  if (query) {
    const queryParams = new URLSearchParams(query);
    API_URL += "?" + queryParams.toString();
  }

  const res = await fetch(API_URL, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
    },
  });
  return await res.json();
};

const apiPUT = async (api, body) => {
  const res = await fetch(`${BASE_URL}/${api}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
    },
    body: JSON.stringify(body),
  });
  return await res.json();
};

const apiPATCH = async (api, body) => {
  const res = await fetch(`${BASE_URL}/${api}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
    },
    body: JSON.stringify(body),
  });
  return await res.json();
};

const apiDELETE = async (api, body) => {
  const res = await fetch(`${BASE_URL}/${api}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
    },
    body: JSON.stringify(body),
  });

  return await res.json();
};

export { apiPOST, apiGET, apiPATCH, apiDELETE, apiPUT, apiPOST_Tokenless };

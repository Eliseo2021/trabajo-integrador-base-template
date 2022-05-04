//api generica y refactorizada
const execute = async (url, config = {}) => {
  try {
    const res = await fetch(url, config);
    return res.json();
  } catch (err) {
    throw new Error(err);
  }
};

const get = async (url) => {
  return execute(url);
};

const post = async (url, body) => {
  return execute(url, {
    method: "POST",
    body: body,
  });
};

const patch = async (url, body) => {
  return execute(url, {
    method: "PATCH",
    body: body,
  });
};

const delet = async (url) => {
  execute(url, {
    method: "DELETE",
  });
};

const api = {
  get: (url) => get(url),
  post: (url, body) => post(url, body),
  patch: (url, body) => patch(url, body),
  delete: (url) => delet(url)
};

export default api;

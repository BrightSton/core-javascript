// fetch 실행

const defaultOptions = {
  method: "GET",
  mode: "cors",
  body: null,
  cache: "no-cache",
  credential: "same-origin",
  redirect: "follow",
  referrerPlicy: "no-reffere",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

export const stone = async (options = {}) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...(defaultOptions.headers ?? {}),
      ...(options.headers ?? {}),
    },
  };

  let response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }
  return response;
};

stone.get = (url, options) => {
  return stone({
    url,
    ...options,
  });
};

stone.post = async (url, options, body) => {
  return stone({
    method: "POST",
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

stone.put = async (url, options, body) => {
  return stone({
    method: "PUT",
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

stone.delete = async (url, options) => {
  return stone({
    method: "DELETE",
    url,
    ...options,
  });
};

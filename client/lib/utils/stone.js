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

const stone = async (options = {}) => {
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
  stone({
    url,
    ...options,
  });
};

stone.post = (url, options, body) => {
  stone({
    method: "POST",
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

stone.put = (url, options, body) => {
  stone({
    method: "PUT",
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

stone.delete = (url, options) => {
  stone({
    method: "DELETE",
    url,
    ...options,
  });
};

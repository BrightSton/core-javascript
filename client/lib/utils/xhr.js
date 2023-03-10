import { typeError } from "../error/typeError.js";

/* readyState
  0: uninitialize // 초기화
  1: loading // 로딩 중
  2: loaded // 로딩 완료
  3: interactive // 인터렉티브
  4: complete // 완료
   */

// xhrData 함수 만들기 method, url

// 콜백 방식
export function xhrData({
  method = "GET",
  url = "",
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    "Content-Type": "application/json",
  },
}) {
  const xhr = new XMLHttpRequest();

  // 비동기 통신 오픈
  xhr.open(method, url);

  /* Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  }); */

  xhr.addEventListener("readystatechange", () => {
    // 객체 구조 분해 할당
    const { status, readyState, response } = xhr;
    console.log(xhr);

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log("통신 완료");
        onSuccess(JSON.parse(response));
      }
    } else {
      onFail("통신 실패");
    }
  });

  // 서버에 요청
  xhr.send(JSON.stringify(body));
}

/* xhrData("POST", "https://jsonplaceholder.typicode.com/users", {
  name: "kindtiger",
  username: "seonbeom",
  email: "tiger@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
});
*/

/* xhrData({
  url: "https://jsonplaceholder.typicode.com/user",
  onSuccess: (result) => {
    console.log(result);
  },
  onFail: (err) => {
    console.error(err);
  },
}); */

xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail,
  });
};
xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    url,
    body,
    onSuccess,
    onFail,
    method: "POST",
  });
};
xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    url,
    body,
    onSuccess,
    onFail,
    method: "PUT",
  });
};
xhrData.delete = (url, body, onSuccess, onFail) => {
  xhrData({
    url,
    body,
    onSuccess,
    onFail,
    method: "DELETE",
  });
};

// promise API

const defaultoptions = {
  url: "",
  method: "GET",
  headers: {
    "Content-type ": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: null,
};

export function xhrPromise(options = {}) {
  const xhr = new XMLHttpRequest();

  const { method, url, body, headers } = Object.assign(
    {},
    defaultoptions,
    options
  );

  if (!url) {
    typeError("서버와 통신할 url 인자는 반드시 필요합니다.");
  }

  xhr.open(method, url);

  xhr.send(body ? JSON.stringify(body) : null);

  return new Promise((resolve, reject) => {
    xhr.addEventListener("readystatechange", () => {
      const { status, readyState, response } = xhr;

      if (status >= 200 && status < 400) {
        if (readyState === 4) {
          resolve(JSON.parse(response));
        }
      } else {
        reject("에러입니다.");
      }
    });
  });
}

/* xhrPromise({
  url: "https://jsonplaceholder.typicode.com/users/1",
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
 */

xhrPromise.get = (url) => {
  return xhrPromise({
    url,
  });
};

xhrPromise.post = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: "POST",
  });
};

xhrPromise.put = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: "PUT",
  });
};

xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    method: "DELETE",
  });
};

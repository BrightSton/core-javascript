/* readyState
  0: uninitialize // 초기화
  1: loading // 로딩 중
  2: loaded // 로딩 완료
  3: interactive // 인터렉티브
  4: complete // 완료
   */

// xhrData 함수 만들기 method, url
function xhrData(method, url, body) {
  const xhr = new XMLHttpRequest();

  // 비동기 통신 오픈
  xhr.open(method, url);

  // 객체 구조 분해 할당
  const { status, readyState, response } = xhr;

  xhr.addEventListener("readystatechange", () => {
    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log("통신 완료");
        console.log(JSON.parse(response));
      }
    } else {
      console.error("통신 실패");
    }
  });

  // 서버에 요청
  xhr.send(JSON.stringify(body));
}

xhrData("POST", "https://jsonplaceholder.typicode.com/users", {
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

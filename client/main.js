import { insertLast, xhrData } from "./lib/index.js";

xhrData.get(
  "https://jsonplaceholder.typicode.com/users/1",
  (result) => {
    console.log(result);
    insertLast("body", JSON.stringify(result));
  },
  (err) => {
    console.error(err);
    insertLast("body", "데이터 로딩 실패");
  }
);

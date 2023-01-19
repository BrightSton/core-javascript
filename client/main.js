import { xhrPromise, insertLast, xhrData, stone } from "./lib/index.js";

async function render() {
  let response = await stone.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  console.log(response.data);
}

render();

xhrData.get(
  "https://jsonplaceholder.typicode.com/users/1",
  (result) => {
    console.log(result);
  },
  (err) => {
    console.error(err);
  }
);

xhrPromise.get("https://jsonplaceholder.typicode.com/users/1");

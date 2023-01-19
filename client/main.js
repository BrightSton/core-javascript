import {
  insertLast,
  xhrData,
  stone,
  getNode,
  renderUserCard,
} from "./lib/index.js";

// rendingUserList 함수 만들기
// ajax get user list

// 유저 카드 생성
// 생성된 카드로 랜더링

// userList.js 로 가서 renderUserCard 함수를 만들고
// 그 안에 createUserCard를 던지고,
// renderUserCard함수를 사용했을 때 렌더링이 잘 될 수 있도록 구현.

const userCardCOntainer = getNode(".user-card-inner");

async function rendingUserList() {
  let response = await stone.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  console.log(response.data);

  let userData = response.data;

  renderUserCard(userCardCOntainer, userData);
}

rendingUserList();

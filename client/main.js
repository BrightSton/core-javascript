/* global gsap */
import {
  insertLast,
  xhrData,
  stone,
  getNode as $,
  renderUserCard,
  changeColor,
  delayP,
  renderSpinner,
  renderEmptyCard,
  getNode,
  attr,
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
  renderSpinner(userCardCOntainer);

  try {
    await delayP(2000);

    getNode(".loadingSpinner").remove();

    let response = await stone.get("http://localhost:3000/users");
    console.log(response.data);

    let userData = response.data;

    userData.forEach((data) => renderUserCard(userCardCOntainer, data));

    console.log(gsap.utils.toArray(".user-card"));

    changeColor(".user-card");

    gsap.to(gsap.utils.toArray(".user-card"), {
      x: 100,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
    });
  } catch (err) {
    renderEmptyCard(userCardCOntainer);
  }
}

rendingUserList();

// 삭제 버튼을 클릭하면 콘솔창에 '삭제' 글자가 출력이 될 수 있도록 만들어 주세요.

userCardCOntainer.addEventListener("click", (e) => {
  let deleteButton = e.target.closest("button");
  let article = e.target.closest("article");

  //if (!deleteButton) return; -> 버튼이 아니면 실행 안함
  //if (!article) return; -> 누른 대상의 인접한 대상이 article이 아니면 실행 안함.
  if (!deleteButton || !article) return;

  let id = attr(article, "data-index").slice(5);

  stone.delete(`http://localhost:3000/users/${id}`).then(() => {
    userCardCOntainer.innerText = "";
    rendingUserList();
  });

  console.log(id);
});

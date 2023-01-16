import {
  clearContents,
  getInputValue,
  getNode,
  getRandom,
  insertLast,
  refError,
  isNumericString,
  showAlert,
  copy,
  addClass,
  removeClass,
} from "./lib/index.js";

import { jujeobData } from "./data/data.js";

const submit = getNode("#submit");
const resultArea = getNode(".result");

function clickSubmitHandler(e) {
  e.preventDefault();

  let name = getInputValue("#nameField");
  let list = jujeobData(name);
  let pick = list[getRandom(list.length - 1)];

  if (!name) {
    console.log("이름으로 꼭 입력해 주세요.");
    showAlert(".alert-error", "잘못된 정보입니다.!", 2000);

    /* addClass(resultArea, "shake");
    setTimeout(() => {
      removeClass(resultArea, "shake");
    }, 1000); */
    // GSAP
    gsap.fromTo(
      resultArea,
      0.01,
      { x: -5 },
      { x: 5, clearProps: "x", repeat: 20 }
    );
    return;
  }

  if (isNumericString(name)) {
    console.log("이름으로 꼭 입력해 주세요.");
    showAlert(".alert-error", "잘못된 정보입니다.!", 2000);
    return;
  }

  clearContents(resultArea);
  insertLast(resultArea, pick);
}

// 이름 작성 후 클립보드에 복사하기.
function clickCopyHandler() {
  let text = resultArea.textContent;
  // 약속 구문
  copy(text).then(() => {
    showAlert(".alert-success", "클립보드 복사가 완료 되었습니다.!", 2000);
  });
}

submit.addEventListener("click", clickSubmitHandler);
resultArea.addEventListener("click", clickCopyHandler);

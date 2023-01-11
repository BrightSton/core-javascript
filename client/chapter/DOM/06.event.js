/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()" -> 잘 사용하지 않음
// 2. DOM 프로퍼티 : element.onclick = handler -> 잘 사용하지 않음
// 3. 메서드 : element.addEventListener(event, handler[, phase])

const first = getNode(".first");
const second = getNode(".second");

function handler() {
  console.log("hit!");
}

first.addEventListener("click", handler);

/* const off = bindEvent(".first", "click", handler);
bindEvent(".second", "click", off); */

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

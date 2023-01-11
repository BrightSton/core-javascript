/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode(".first");

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

//console.log((first.className = "hola")); -> 잘 사용하지 않음.
first.classList.add("hola");
first.classList.remove("hola");
first.classList.toggle("hola");
console.log(first.classList.contains("hola"));

function addClass(node, className) {
  if (typeof node === "string") node = getNode(node);

  if (typeof className !== "string") {
    typeError("addClass 함수의 두 번째 인자에는 문자 타입이 와야 합니다.");
  }
  node.classList.add(className);
}

// 변경하기 : 대상의 클라스를 지운다.
function removeClass(node, className) {
  if (typeof node === "string") node = getNode(node);

  if (!className) {
    node.className = "";
    return;
  }
  if (typeof className !== "string") {
    typeError("removeClass 함수의 두 번째 인자에는 문자 타입이 와야 합니다.");
  }
  node.classList.remove(className);
}

function toggleClass(node, className) {
  if (typeof node === "string") node = getNode(node);

  if (typeof className !== "string") {
    typeError("toggleClass 함수의 두 번째 인자에는 문자 타입이 와야 합니다.");
  }
  node.classList.toggle(className);
}

removeClass(".first", 123);

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

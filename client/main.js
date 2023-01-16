import {
  diceAnimation,
  disableElement,
  enableElement,
  getNode,
  getNodes,
  invisibleElement,
  visibleElement,
} from "./lib/index.js";

// [ 주사위 굴리기 ]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸함수 만들기
// 3. handleRollingDice 함수 만들고 토글로 애니메이션 제어하기
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기

// [ 레코드 리스트 보이기 ]
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수 만들기
// 4. visible 활성 유틸 함수 만들기
// 5. toggleStates 유틸 함수 만들기

// 배열의 구조 분해 할당
const [rollingDiceButton, recordButton, resetButton] = getNodes(
  ".buttonGroup > button"
);
// const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');
// const recordButton = getNode('.buttonGroup > button:nth-child(2)');
// const resetButton = getNode('.buttonGroup > button:nth-child(3)');

const recodeList = getNode(".recordListWrapper");

console.log(rollingDiceButton);

// IIFE
const handleRollingDice = (() => {
  let isRolling = false;
  let stopAnimation;

  return () => {
    if (!isRolling) {
      // console.log("첫 클릭");
      stopAnimation = setInterval(diceAnimation, 100);
      disableElement(recordButton);
      disableElement(resetButton);
    } else {
      // console.log("둘째 클릭");
      clearInterval(stopAnimation);
      enableElement(recordButton);
      enableElement(resetButton);
    }

    isRolling = !isRolling;
  };
})();

const handleRecord = () => {
  visibleElement(recodeList);
  //invisibleElement(recodeList);
};

rollingDiceButton.addEventListener("click", handleRollingDice);
recordButton.addEventListener("click", handleRecord);

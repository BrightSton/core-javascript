/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

const frontEndDev = [
  "HTML",
  "CSS",
  "SVG",
  "JavaScript",
  "jQuery",
  "React",
  "Redux",
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

/* console.log(frontEndDev[0]);
console.log(frontEndDev[1]);
console.log(frontEndDev[2]);
console.log(frontEndDev[3]);
console.log(frontEndDev[4]);
console.log(frontEndDev[5]); */

/* let i = 0;
while (i < frontEndDev.length) {
  console.log(frontEndDev[i]);
  i++;
} */

let i = frontEndDev.length;
while (i > 0) {
  console.log(frontEndDev[i - 1]);
  i--;
}

// 전개 연산자 (전개 구문) -> spread operator
/* let copyArray = [...frontEndDev]; */

// 배열의 마지막 순서 부터 빼낸다
/* while (frontEndDev.length) {
  console.log(copyArray.pop());
} */

// 배열의 첫번째 순서 부터 빼낸다
/* while (frontEndDev.length) {
  console.log(copyArray.shift());
} */

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

// while 문 (역순환 : 역방향)

// 성능 진단 : 순환 vs. 역순환

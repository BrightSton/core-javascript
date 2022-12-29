/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let age = +prompt("당신의 나이를 적어주세요.", "");
if (age >= 14 && age <= 90) {
  console.log("참");
} else {
  console.log("거짓");
}

let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && " " && [] && { thisIsFalsy: false };
// -> true && true && true && true 로 마지막 값이 나옴

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thisIsTruthy: true };

let userName = prompt("ID는?", "");
/* if (userName === "" || userName === null) {
  alert("적어야지~");
} else if (userName === "admin") {
  let pw = prompt("PW는?", "");
  if (pw === "") {
    alert("적어야지~");
  } else if (pw === "123") {
    alert("yes, my master");
  } else {
    alert("그걸 까먹니~");
  }
} else {
  alert("그걸 까먹니~");
} */

if (userName === "admin") {
  let pw = prompt("PW는?", "");
  if (pw === "master") {
    alert("yes, my master");
  } else {
    alert("그걸 까먹니~");
  }
} else if (userName === "" || userName === null) {
  alert("적어야지~");
} else {
  alert("그걸 까먹니~");
}

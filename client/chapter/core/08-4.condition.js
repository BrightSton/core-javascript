/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = "user@company.io";
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? "user@company.io"
    : emailAddress;
console.log(receivedEmailAddress);

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = "user@company.io" ?? emailAddress;
console.log(receivedEmailAddress);

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환(null 과 undefined 만 잡음)

const WIDTH = "10px";

console.log(null || WIDTH); // -> 10px
console.log(null ?? WIDTH); // -> 10px

console.log(undefined || WIDTH); // -> 10px
console.log(undefined ?? WIDTH); // -> 10px

console.log(true || WIDTH); // -> true
console.log(true ?? WIDTH); // -> true

console.log(false || WIDTH); // -> 10px
console.log(false ?? WIDTH);
// -> false (false를 정의해 주었다고 판단하여 false가 나옴)

console.log("" || WIDTH); // -> 10px
console.log("" ?? WIDTH);
// -> "" (마찬가지로 빈 배열을 정의해 주었다고 판단하여 ""가 나옴)

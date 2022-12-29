/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

let number = +prompt("숫자를 입력해주세요", 0);
let answer = number > 0 ? 1 : number < 0 ? -1 : 0;
console.log(answer);

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = "yes";

// 영화 볼거니?
let goingToWatchMovie = "no";

// 조건부 연산자
// if 문(statement)
if (didWatchMovie === "yes") {
  console.log("그 영화 재미있더라");
} else if (goingToWatchMovie.includes("yes")) {
  // else if 복수 조건 처리
  console.log("그 영화 엄청 기대하구 있어");
} else {
  // else 절(caluse)
  console.log("그 영화 재미없다구 해서 안보려구");
}

// 멀티 조건부 연산자 식
let answer =
  didWatchMovie === "yes"
    ? "그 영화 재미있더라"
    : goingToWatchMovie === "yes"
    ? "그 영화 엄청 기대하구 있어"
    : "그 영화 재미없다구 해서 안보려구";

console.log(answer);

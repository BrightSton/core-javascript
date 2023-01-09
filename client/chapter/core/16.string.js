/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

// 내가 사용하고 있는 브라우저 확인할 때 사용
function checkBrowser(browserName) {
  let browser;
  let ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("chrome") > -1) browser = "chrome";
  else if (ua.indexOf("edge") > -1) browser = "edge";
  else if (ua.indexOf("whale") > -1) browser = "whale";
  else if (ua.indexOf("safari") > -1) browser = "safari";
  else if (ua.indexOf("firefox") > -1) browser = "firefox";

  return browser === browserName;
}

let message = "Less is more.";

/* length 프로퍼티 */
let stringTotalLength = message.length;
console.log("stringTotalLength : ", stringTotalLength); // -> 13

/* 특정 인덱스의 글자 추출 */
let extractCharacter = message[0];
console.log("extractCharacter : ", extractCharacter); // -> L

/* 문자열 중간 글자를 바꾸는 건 불가능 */
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
// message[3] = "i";  -> 안됨
// message = 'more' + message[5] -> 가능
let immutableChangeCharacter;

/* 부분 문자열 추출 */

// -> 괄호 안에 아무것도 없으면 다 출력하고 들어가면 부분만 잘라낸다.
let slice = message.slice();
console.log("slice : ", slice); // -> Less is more.

let subString = message.substring(-1, 5);
console.log("subString : ", subString); // -> Less

let subStr; // -> 사라졌음.

/* 문자열 포함 여부 확인 */

// 괄호 안에 존재하는 문자면 몇 번째인지 알려주고
// 존재하지 않는 문자를 넣으면 -1을 반환한다.
let indexOf = message.indexOf("i");
console.log("indexOf : ", indexOf); // -> 5
let lastIndexOf = message.lastIndexOf("i", 1);
console.log("lastIndexOf : ", lastIndexOf); // -> -1

// true or false 를 반환해준다.
let includes = message.includes("Less");
console.log("includes : ", includes); // -> true

// 첫 글자를 확인할 때
let startsWith = message.startsWith("L");
console.log("startsWith : ", startsWith); // -> true

// 마지막 글자를 확인할 때
let endsWith = message.endsWith("L");
console.log("endsWith : ", endsWith); // -> false

/* 공백 잘라내기 (단, 띄어쓰기는 안 사라진다.) */
let trimLeft; // -> 지워진 글자
let trimRight; // -> 지워진 글자
let trim = message.trim();
console.log("trim : ", trim); // -> Less is more.

/* 텍스트 반복 */
let repeat = message.repeat(2);
console.log("repeat : ", repeat); // -> Less is more.Less is more.

// /* 대소문자 변환 */
let toLowerCase = message.toLowerCase();
console.log("toLowerCase : ", toLowerCase); // -> less is more.
let toUpperCase = message.toUpperCase();
console.log("toUpperCase : ", toUpperCase); // -> LESS IS MORE.

// /* 텍스트 이름 변환 유틸리티 함수 */
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, "")
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

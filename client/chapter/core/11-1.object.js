/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */

/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: "fixed",
  zIndex: 10000,
  top: "50%",
  left: "50%",
  width: "60vw",
  maxWidth: 800,
  height: "40vh",
  minHeight: 280,
  transform: "translate(-50%, -50%)",
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// authentication = 인증
// authorization = 권한
let authUser = null;

authUser = {
  uid: "user-id-asd4546A456",
  name: "whitestone",
  email: "gusehf321@naver.com",
  isSignIn: true,
  permission: "paid", // free || paid
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.isSignIn);
console.log(authUser.email);
console.log(authUser.permission);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
console.log(authUser["uid"]);
console.log(authUser["name"]);
console.log(authUser["isSignIn"]);
console.log(authUser["email"]);
console.log(authUser["permission"]);

// 계산된 프로퍼티 (calcurate property)
let calculateProperty = "phone"; // phone | tel

let createUser = (computedProp = calculateProperty) => {
  return {
    name: "unknown",
    email: "unknown@company.io",
    [computedProp]: "010-0000-0000",
  };
};

const user = createUser("tel");

// 프로퍼티 포함 여부 확인
Object.prototype.SIGN = true;

for (let key in authUser) {
  // instance method
  if (Object.prototype.hasOwnProperty.call(authUser, key)) {
    console.log(key);
  }
}

// 프로퍼티 나열 authUser : 객체 key만 모아놓은 배열,
//                            value만 모아놓은

let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);

const getPropertiesList = (object) => {
  return Object.keys(Object);
};

let result = getPropertiesList(authUser);

// 프로퍼티 제거 or 삭제

/*  함수 제작
  1. 함수 이름 정하기
  2. 인수 (arguments)와 인자 (parameter) 정하기
  3. 확인하기 (validation)
  4. 리턴값 (return)
*/

// 제거
authUser["uid"] = null;

let removeProperty = (object, key) => {
  object[key] = null;
};

// 삭제
delete authUser["uid"];

let deleteProperty = (object, key) => {
  delete authUser[key];
};

// 단축 프로퍼티
let name = "선범";
let email = "seonbeom2@euid.dev";
let authorization = "Lv. 99";
let isLogin = true;

const student = {
  name, // -> name: name
  email, // -> email: email
  authorization, //-> authorization: authorization
  isLogin, // -> isLogin: isLogin
};

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
// 객체의 키를 배열로 바꾸고 그 배열의 갯수가 0이면 ? true : false

function isEmptyObject(object) {
  let keyArray = Object.keys(object);
  //keyArray.length === 0 ? true : false;
  return keyArray.length === 0;
}

isEmptyObject(authUser);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430,
};

// 월급의 총 합 구하기

/* 구조 분해 할당 destructuring assignments */
let sum = (object) => {
  let total = 0;
  let objectEntry = Object.entries(object);
  for (let [key, value] of objectEntry) {
    // let key = keyValue[0];
    // let value = keyValue[1];
    total += value;
  }
  return total;
};

sum(salaries);

let color = ["#ff000", "#2b00ff", "#00ff2f"];

// const COLOR_RED = color[0];
// const COLOR_BLUE = color[1];
// const COLOR_GREEN = color[2];
const [COLOR_RED, COLOR_BLUE, COLOR_GREEN] = color;

/* ---------------------------------------------------------------------- */
/* 객체 구조 분해 할당 destructuring assignments                                                              */
/* ---------------------------------------------------------------------- */

const { Ann, john, Pete } = salaries;

console.log(Ann);

/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */

let firstValue = Number(prompt("덧셈할 첫 번째 숫자를 입력하세요.", 1));
let secondValue = Number(prompt("덧셈할 두 번째 숫자를 입력하세요.", 2));

console.log(firstValue + secondValue);

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = "10";
let b = "30";

// 단항 연산자 -> 피연산자 갯수가 1개
let unary = +a; // -> 숫자 10

// 이항 연산자 -> 피연산자 갯수가 2개
let binary = a + b; // -> 숫자 40

// 삼항 연산자 -> 피연산자 갯수가 3개
let ternary = a > b ? "big" : "small"; // -> small

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 1 - 2;

// 산술 연산자: 곱셈
let multiplication = 1 * 2;

// 산술 연산자: 나눗셈
let division = 1 / 2;

// 산술 연산자: 나머지
let remainder = 1 % 2;

// 산술 연산자: 거듭 제곱
let power = 1 ** 2;

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = "9" * "3";

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6]; // -> 1, 2, 34, 5, 6 로 표기됨

//구 버전 -> 잘 사용하지 않음
let newArray = [1, 2, 3].concat([4, 5, 6]);
console.log(newArray); // -> [1, 2, 3, 4, 5, 6]

//전개 연산자 Spread Operate -> 모던 버전
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

let newArray2 = [...firstArray, ...secondArray];
console.log(newArray); // -> [1, 2, 3, 4, 5, 6]

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

let number = 100;

// 선,후 증감 연산자
// ++, --

number++; // -> 100
++number; // -> 101

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;

//let total = (count % 4) * (count /= 2) + count ** 3; -> 135

let total = count % 4; // *

let count2 = count / 2; // +

total = total * count + count2; // -> 135

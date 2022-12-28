/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number -> '2022'
const YEAR = 2022;
console.log(String(YEAR), YEAR + "");

// undefined -> 'undefined'
// null -> 'null'
let days = null;
console.log(String(days), days + "");

// boolean -> 'true' or 'false'
let iskind = true;
console.log(String(iskind), iskind + "");

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed -> NaN
console.log(Number(undefined), +undefined);

// null -> 0
let money = null;
console.log(Number(money), +money);

// boolean -> true : 1 / false : 0
let cutie = false;
console.log(Number(cutie), +cutie, cutie * 1);

// string 숫자형 문자
let num = "132";
console.log(Number(num), +num, num / 1);

// numeric string
let width = "320px";
let height = "320.125041px";
console.log(parseInt(width, 10)); // 정수 일때만
console.log(parseFloat(height, 10)); // 소수점 포함

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, '0', NaN, '' -> false
// 위에 나열한 것 이외의 것들

console.log(Boolean(!null)); // true (null 앞에 부정문 !가 나오기 때문)
console.log(Boolean(0)); // true
console.log(Boolean("0")); // false

/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null);

// 2. 값이 할당되지 않은 상태
console.log(typeof undefined);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message1 = "hello";

let message2 = `'hello'`;

let nickName = "tiger";

let message3 = `안녕 내이름은 ${nickName}이야`;

console.log(message3);

// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 100.123;

console.log(`number : `, typeof number);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
//console.log(12913n + 10); -> bigint와 일반 숫자는 계산이 안됨.
console.log(12913n + 10n); // bigin는 bigint와 계산이 가능.

console.log(12913n);

// 6. 참(true, yes) 또는 거짓(false, no)
console.log(typeof true);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log(typeof {});

// 8. 고유한 식별자(unique identifier)
console.log(typeof Symbol("id"));

console.log(typeof Math);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof -> 더 많이 사용된다.
// 2) 함수 typeof()

// 언어 상, 오류

// Object
/* key와 value의 구성 */
//const user = new Object(); -> 객체 생성자
const user = {
  name: "tiger",
  age: 32,
};

// Array
// let list = new Array() -> 배열 생성자
// collection
let list = [1, 10, 100, 1000, 2, 3];

// function
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

// this

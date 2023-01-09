/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

// rest parameter
const calculateTotal = (...args) => {
  let total = 0;

  args.forEach((item) => {
    total += item;
  });

  /* args.reduce((acc, item) => acc + item); */

  return;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
/* 
console.log(resultY);
console.log(resultZ); */

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, c, d) => a + b + c + d;

// 화살표 함수와 this

function nomalFunction() {
  console.log("일반함수 : ", this);
}

const arrowFunction = () => {
  console.log("화살표 함수 : ", this);
};

nomalFunction();
arrowFunction();

// 객체의 메서드로 함수를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾는다.
// 메서드 안에서의 함수는 this를 찾기 위해서는 arrowFunction이 오히려 좋다.

const user = {
  name: "lee",
  age: 27,
  address: "대구시 달성군 논공읍",
  grades: [80, 90, 100],

  // ! 일반 함수 => 나, 화살표 함수 => 내 위의 부모 (즉, 전역인 window 나옴)
  // * 객체 안에서 함수 메서드는 일반 함수가 낫다
  totalGrades: function () {
    console.log(this.grades);
  },
};

user.totalGrades();

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  //console.log(numeric ** powerCount);
  let result = 1;
  for (let i = 0; i < powerCount; i++) {
    result = result * numeric;
  }
  console.log(result);
};

let powExpression = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);

powExpression(2, 53); // 2**53

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  let result = "";
  for (let i = 1; i <= repeatCount; i++) {
    result += text;
  }
  console.log(result);
};

let repeatExpression = (text, repeatCount) =>
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, "");

repeatExpression("hello", 3); // "hellohellohello"

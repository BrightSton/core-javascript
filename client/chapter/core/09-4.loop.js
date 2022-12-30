/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */

const javaScript = {
  creator: "Brendan Eich",
  createAt: "1995.05",
  standardName: "ECMAScript",
  currentVersion: 2022,
};

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

let key = "standardName";

console.log(key in javaScript);

// 객체 자신의(own) 속성인지(property) 확인하는(has) 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// 하지만 hasOwnProperty는 객체 안에 같은 이름의 key값이 오면 보호해 주지 않음
console.log(javaScript.hasOwnProperty(key));

// Object 안에 있는 hasOwnProperty라는 객체 메서드인 함수를
// call이라는 함수 메서드를 사용하여 빌려오는 방법으로 해결
Object.prototype.hasOwnProperty.call(javaScript, key);

// 또한 Object.prototype이 가지는 의미가 new Object의 뜻으로
// 새로운 객체를 만드는 걸로 이해하면 된다
// 따라서 간편하게 줄여서 사용하자면

// let a = new Object()
// let a = {}
// Object.prototype === {}

for (let key in javaScript) {
  if ({}.hasOwnProperty.call(javaScript, key)) {
    console.log(key);
  }
}

const user = {
  name: "stone",
  age: 27,
};

function hello() {
  console.log(this);
}

hello.call();

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

let tens = [10, 100, 1000, 10000];

for (let value in tens) {
  if ({}.hasOwnProperty.call(tens, value)) {
    console.log(tens[value]);
  }
}

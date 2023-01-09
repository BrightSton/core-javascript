/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10, 100, 1000, 10000];

console.log(typeof arr);
console.log(Array.isArray(arr));

function isArray(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === "array"
  );
}

function isNull(data) {
  // typeof에서는 배열 객체 null 전부 object로 나오는데 아래의 표현을 통해
  // 어떠한 type인지 명확하게 확인할 수 있다.
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === "null"
  );
}
/* 요소 순환 -------------------------------------------------------------- */

let user = {};
// forEach
arr.forEach(function (item, index) {
  this[index] = item;
}, user);

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse -> arr.reverse() : 배열 안의 순서가 반대로
// splice -> arr.splice(1,3,23,5) : 추가 삭제 교체 다 가능
// sort -> arr.sort(a,b => a-b); : a-b는 오름차순, b-a는 내림차순 정렬

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map
let todo = "밥먹기, 미용실가기, 코딩공부하기".split(", ");

let newArray = arr.map((item) => item * 2);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf / lastIndexOf
console.log(arr.indexOf(1000));
console.log(arr.lastIndexOf(100));
// includes
console.log(arr.includes(99));

/* 요소 찾기 -------------------------------------------------------------- */

const users = [
  { id: 1, name: "로운" },
  { id: 2, name: "승택" },
  { id: 3, name: "연주" },
];

// find
let find = users.find((item, index) => item.id === 3);

console.log("find : ", find);

// findIndex
let findIndex = users.findIndex((item) => item.id === 3);

console.log("findIndex : ", findIndex);

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
let filter = arr.filter((number) => number > 100);
console.log("filter : ", filter);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: "윤보라",
    age: 28,
    job: "작꼬져",
  },
  {
    name: "이로운",
    age: 23,
    job: "배고픈 개발자",
  },
  {
    name: "오승택",
    age: 21,
    job: "물음표살인마",
  },
];

// reduce
let reduce = friends.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);
console.log(reduce);

let template2 = todo.reduce((acc, cur, index) => {
  return acc + /* html */ `<li>할일 ${index + 1} : ${cur}</li>`;
}, "");
console.log(template2);

// reduceRight -> reduce와 동일하며 오른쪽에서 부터 값을 더해간다.

/* string ←→ array 변환 ------------------------------------------------- */

let str = "성찬 보경 일범 세민 형진 주현";

// split
let split = str.split(" ");
console.log("split : ", split);

// join
let join = split.join("/");
console.log("join : ", join);

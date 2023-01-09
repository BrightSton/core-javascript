/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING = "아침",
  LUNCH = "점심",
  DINNER = "저녁",
  NIGHT = "밤",
  LATE_NIGHT = "심야",
  DAWN = "새벽";

let thisTime = DAWN;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */
switch (thisTime) {
  // 조건 유형(case): '아침'
  // '뉴스 기사 글을 읽는다.'
  case "아침":
    console.log("뉴스 기사 글을 읽는다.");
    break;
  // 조건 유형(case): '점심'
  // '자주 가는 식당에 가서 식사를 한다.'
  case "점심":
    console.log("자주 가는 식당에 가서 식사를 한다.");
    break;
  // 조건 유형(case): '저녁'
  // '동네 한바퀴를 조깅한다.'
  case "저녁":
    console.log("동네 한바퀴를 조깅한다.");
    break;
  // 조건 유형(case): '밤'
  // '친구에게 전화를 걸어 수다를 떤다.'
  case "밤":
    console.log("친구에게 전화를 걸어 수다를 떤다.");
    break;
  // 조건 유형(case): '심야'
  // 조건 유형(case): '새벽'
  // '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'
  case "심야":
  case "새벽":
    console.log("한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.");
    break;
}

/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime === "아침") {
  console.log("뉴스 기사 글을 읽는다.");
} else if (thisTime === "점심") {
  console.log("자주 가는 식당에 가서 식사를 한다.");
} else if (thisTime === "저녁") {
  console.log("동네 한바퀴를 조깅한다.");
} else if (thisTime === "밤") {
  console.log("친구에게 전화를 걸어 수다를 떤다.");
} else if (thisTime === "심야" || thisTime === "새벽") {
  console.log("한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.");
}

/* switch vs. if -------------------------------------------------------- */
/* else if 문이 많아지면 많아질 수록 switch 문을 사용하는것이
더 편하고 알아보기에도 좋다라는 결론이 나옴. */

let number = 5;

// 0 ~ 6 의 값을 받는다.
/* 0 = "월"
1 = "화"
2 = "수"
3 = "목"
4 = "금"
5 = "토"
6 = "일" */

//임의 숫자를 넣어서 무슨 요일 인지를 알려주는 함수를 만들어보자

function getDay(dayValue) {
  switch (dayValue) {
    case 0:
      return "월";
    case 1:
      return "화";
    case 2:
      return "수";
    case 3:
      return "목";
    case 4:
      return "금";
    case 5:
      return "토";
    case 6:
      return "일";
  }
}

// 랜덤 수가 오는 함수
function getRandom(n) {
  return Math.round(Math.random() * n);
}

let result = getDay(getRandom(6));
console.log(result);

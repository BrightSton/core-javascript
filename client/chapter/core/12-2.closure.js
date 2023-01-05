/* -------------------------------------------------------------------------- */
/* 클로저(Closures) - 예시                                                            */
/* -------------------------------------------------------------------------- */

function earth() {
  let water = true;
  let apple = {
    founder: "Steve Jobs",
    ceo: "Tim Cook",
    product: ["iphone", "macbook", "macStudio", "appleWatch"],
  };
  let o2 = 9999;

  /*
   function tiger() {
    console.log(water, o2);
  }

  return tiger; 
  */

  return function () {
    console.log(water, o2);
  };
}

const ufo = earth(); // -> 이것이 클로저

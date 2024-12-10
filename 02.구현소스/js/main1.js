// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// 나의 함수 불러오기
import myFn from "./my_function.js";

const slide = myFn.qs(".slide");
// 순번변수
const section = myFn.qs(".section");

//버튼
let seqNum = 0;
myFn.qs(".ab2").onclick = () => {
  seqNum++;
  if (seqNum > 4) {
    seqNum = 0;
    slide.style.transition = ".3s ease-in-out";
  } else {
    slide.style.transition = "1s ease-in-out";
  }
  // 슬라이드 CSS변경하기
  seqnum();
};
myFn.qs(".ab1").onclick = () => {
  seqNum--;
  if (seqNum < 0) {
    seqNum = 4;
    slide.style.transition = ".3s ease-in-out";
  } else {
    slide.style.transition = "1s ease-in-out";
  }
  seqnum();
  // ??
};

// 자동 넘김
// var sec = document.querySelector('section');
// var secLen = sec.querySelectorAll('img').length;
// setInterval(interval,2000);
// function interval() {
//     seqNum++;
//     if (seqNum == secLen) seqNum = 0;
//     seqnum()
// }

// translate 함수
function seqnum() {
  console.log(seqNum);
  slide.style.translate = seqNum * -100 + "%";
}

// 메인 페이지 JS - main.js


// 나의 함수 불러오기
import myFn from "./my_function.js";
import main1 from "./main1.js";


let nav = document.querySelector("nav");
let a = document.querySelector("header a");
let hdd = document.querySelector(".hdd");
let on = document.querySelector(".on");
let hspan = document.querySelectorAll("header span");
let hddul = document.querySelector(".hddul");
a.addEventListener("click", function () {
  hdd.classList.toggle("active");
  // a를 클릭하면 hdd에 active가 추가
  // hspan.style.backgroundColor='black';
  hddul.classList.toggle("active");
});
console.log(window.scrollTop);









const slide = myFn.qs('.slide');
// 순번변수

let seqNum = 0;
myFn.qs('.ab2').onclick = ()=>{
    seqNum++;
    if(seqNum>4)seqNum = 0;
    // 슬라이드 CSS변경하기
    num()
};
myFn.qs('.ab1').onclick = ()=>{
    seqNum--;
    num()
    if(seqNum<0)seqNum = 5;
}

function num(){
    slide.style.translate = (seqNum*-100)+'%';
    slide.style.transition = '.4s ease-in-out';
}

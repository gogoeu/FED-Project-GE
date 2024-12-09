// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// 나의 함수 불러오기
import myFn from "./my_function.js";





const slide = myFn.qs('.slide');

// 순번변수
const section = myFn.qs('.section');




let seqNum = 0;
myFn.qs('.ab2').onclick = ()=>{
    seqNum++;
    if(seqNum>4)seqNum = 0;
    // 슬라이드 CSS변경하기
    seqnum()
};
myFn.qs('.ab1').onclick = ()=>{
    seqNum--;
    seqnum()
    if(seqNum<0)seqNum = 5;
}
function seqnum(){
    slide.style.translate = (seqNum*-100)+'%';
    slide.style.transition = '.4s ease-in-out';
}


var sec = document.querySelector('section');
var secLen = sec.querySelectorAll('img').length;

setInterval(interval,2000);
// var num = 0;
function interval() {
    // num++;
    seqNum++;
    // if (num == secLen) num = 0;
    if (seqNum == secLen) seqNum = 0;
    seqnum()
}
// 메인 페이지 JS - main.js
let nav = document.querySelector("nav");
let a = document.querySelector("header a");
let hdd = document.querySelector(".hdd");
let on = document.querySelector(".on");
let nspan = document.querySelectorAll(".nav span");
let hddul = document.querySelector(".hddul");
a.addEventListener("click", function () {
  hdd.classList.toggle("active");
  // a를 클릭하면 hdd에 active가 추가
  nspan.style.backgroundColor="black"; //왜
  // hspan.style.cssText = "background:black; z-index:1;"
  hddul.classList.toggle("active");
});
// console.log(window.scrollTop);

let abtn = document.querySelectorAll('.abtn');
abtn.forEach(el=>{
  el.addEventListener('click',function(e){
    e.preventDefault();
    console.log('sdd');
  })
})
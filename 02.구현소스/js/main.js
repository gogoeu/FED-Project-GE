// 메인 페이지 JS - main.js
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
// console.log(window.scrollTop);

let abtn = document.querySelectorAll('.abtn');
abtn.forEach(el=>{
  el.addEventListener('click',function(e){
    e.preventDefault();
    console.log('sdd');
  })
})
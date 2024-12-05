// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// 나의 함수 불러오기
import myFn from "./my_function.js";

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(.slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 0으로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -100%로 변경한다.
            그 후 left값을 0으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/

// 전역변수구역 //////////
/* 
    (참고: JS에서 이름짓는 일반규칙)
    1. 변수/함수 : 캐믈케이스(첫단어소문자 뒷단어 대문자시작)
    2. 생성자함수/클래스 : 파스칼케이스(모든첫글자 대문자)
    3. 상수 : 모든글자 대문자(연결은 언더스코어-스네이크 케이스)
*/


// 초기 테스트
// 오른쪽 버튼 클릭시 ul.slide의 css를 변경하여 왼쪽으로 이동
// 이벤트대상: .ab2
// 변경대상: .slide








/* let abtn = document.querySelectorAll('.abtn');
abtn.addEventListener('click',function(e){
    e.preventdefault;
})
 */


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

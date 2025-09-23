const header = document.querySelector("header");
console.log(header);

let posY = 0;

window.addEventListener("scroll", (e) =>{
    if(posY , window.scrollY){
        headerHide()
    }else{
        headerShow()
    }
    posY = window.scrollY;
});
/*
헤더 숨기는 함수 만들어서 header에 hide라는 클래스 붙이기
헤어 보이는 함수 만들어서 header에 hide라는 클래스 떼기
*/
function headerHide(){
            header.classList.add("hide");
}
function headerShow(){
            header.classList.remove("hide");
}



//스크롤 페이드인인터랙션
const content = document.querySelectorAll(".content");
window.addEventListener("scroll", ()=>{
    const winH = window.innerHeight;
    for(let i = 0; i < content.length; i++){
        const contentTop = content[i].getBoundingClientRect().top;
        
        if(contentTop - winH < 0){
            content[i].classList.add("in");//화면 안에 들어오면 in 클래스 추가
        }else{
            content[i].classList.remove("in");//화면 밖에 나가면 in 클래스 제거
        }
    }
});
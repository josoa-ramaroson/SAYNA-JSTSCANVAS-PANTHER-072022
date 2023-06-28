let currentSlide = 0;
let slideElements = document.querySelectorAll(".one-slide");
let btnSlide = document.querySelector("#arrow-btn");

function nextSlide(event){
    slideElements[currentSlide].classList.add("effet-disapear");
    
    currentSlide++;
}


btnSlide.onclick = nextSlide;
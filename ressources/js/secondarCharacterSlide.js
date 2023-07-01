let currentSlide = 1,
btnSlide = document.querySelector("#arrow-btn"),
 slideElements = document.querySelectorAll(".one-slide")
 slideContainer = document.querySelector("#slide-secondar-characters"),
 widthSlide = slideElements[0].clientWidth;

 let firstSlide = slideElements[0].cloneNode(true),
 secondSlide = slideElements[1].cloneNode(true),
 thirdSlide =  slideElements[2].cloneNode(true),
 lastSlide = slideElements[slideElements.length-1].cloneNode(true);

 firstSlide.id = "first-slide";
lastSlide.id = "last-slide";
slideContainer.prepend(lastSlide);
slideContainer.append(firstSlide);
slideContainer.append(secondSlide);
slideContainer.append(thirdSlide);

slideContainer.style.transform = `translateX(-${widthSlide*currentSlide}px)`;


btnSlide.onclick =  slideSuivant;

slideElements = document.querySelectorAll(".one-slide");
slideElements[currentSlide-1].style.opacity = 0;
function slideSuivant(){



    slideElements = document.querySelectorAll(".one-slide");
    
    slideElements.forEach((element)=>{
        if(element.firstElementChild.classList.contains("image-actual")) element.firstElementChild.classList.remove("image-actual");
        element.style.opacity = 1;
    });
    slideElements[currentSlide-1].style.opacity = 0;
    if(currentSlide>= slideElements.length-1)  return;
    currentSlide++;
    slideContainer.style.transform = `translateX(-${widthSlide*currentSlide}px)`;
    slideContainer.style.transition = `.8s`;
   slideElements[currentSlide].firstElementChild.classList.add("image-actual")
}
slideContainer.addEventListener('transitionend', ()=>{

    slideContainer.style.transition = "0.8s";
    slideElements[currentSlide].firstElementChild.style.transition = "0.8s";

    currentSlide = (currentSlide >= slideElements.length)? slideElements.length-1:currentSlide;

   if(slideElements[currentSlide].id === firstSlide.id){
    setTimeout(()=>{
        slideContainer.style.transition = "none";
        currentSlide = 1;
        slideElements[currentSlide].firstElementChild.style.transition = "none";
        slideElements[currentSlide].firstElementChild.classList.add("image-actual")
        slideContainer.style.transform = `translateX(-${widthSlide*currentSlide}px)`;
        
        
    },800)
   
}
})



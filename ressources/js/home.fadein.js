function fadeInEnter(entries,observer){
    // non observer : avec un class CSS before-seen
    // observer : sans le clas CSS
    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            // setTimeout(() => {
            //     entry.target.classList.remove("before-seen");
            // }, 1000);
             entry.target.classList.remove("before-seen");
        }
        
    });
}

  // configuration de l'API Observer
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
};

// create a new intersection observer

const observer = new IntersectionObserver(fadeInEnter,options);

// all element to be observed
let selectorElementFadedIn = [
"div#line-gauche-1",
"div#line-1",
"#welcome-banner",
"#slide-secondar-characters",
"article.left-article",
"section#t-chala",
"img#chala-image",
"section#black-panther-image",
"#contact-form-wrapper",
"nav",
"footer",
"article:not(#contact-form)"
];
let elementFadedIn = document.querySelectorAll(selectorElementFadedIn.join(","));

elementFadedIn.forEach((element)=>{
    if(!element.classList.contains("before-seen"))
        element.classList.add("before-seen");
   // element.style = "transition: all 2s ease-in-out;";
    observer.observe(element);
})
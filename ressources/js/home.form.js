const submitForm = document.querySelector("#submitForm");
const popUp = document.querySelector(".confirm-pop");
const btnClose = document.querySelector("#popupBtn");
document.getElementById("formulaire").addEventListener('submit',(e)=>{
    e.preventDefault();
});
submitForm.addEventListener("click",()=>{
    let nom = document.querySelector("#nom-form").value;
    let mail = document.querySelector("#email-form").value;
    let message = document.querySelector("#form-message").value;

    if(nom === "" || mail === "" || message === ""){
        alert("Veuillez remplir les champs vide");
    }
    else{
        popUp.style.display = "flex";
    }
    
})

btnClose.addEventListener("click",()=>{
    popUp.style.display = "none";
} )
let horlogeStopper ;
let btnEnigme1 = document.getElementById("btn-enigme-1");
let btnEnigme2 = document.getElementById("btn-enigme-2");
let btnEnigme3 = document.getElementById("btn-enigme-3");
let enigme = document.querySelectorAll(".challenge");
let popupresult = document.querySelector(".popupresult");
let popupTitre = document.querySelector(".popup-titre");
let popupDescription = document.querySelector(".popupresult .description");
let suivantPrecedent = document.querySelector(".suivant-precedent");
let popupFinal = document.querySelector(".popupresult-final-container");
function reussiSuivant(suivant){
    popupTitre.innerHTML = "BRAVO !"
    popupDescription.innerHTML = "Tu as trouvé la réponse. Es-tu prêt pour l'énigme suivante?";
    suivantPrecedent.innerHTML = "QUESTION SUIVANT";
  
    suivantPrecedent.onclick = ()=>{
        enigme[suivant].classList.add("current-challenge");
        popupresult.classList.remove("active");
    };
}
function nonReussiReste(reste){
    popupTitre.innerHTML = "DOMMAGE !"
    popupDescription.innerHTML = "Tu as presque trouvé la réponse. réessaie encore, n'abandonne pas!!";
    suivantPrecedent.innerHTML = "REESAYER";
  
    suivantPrecedent.onclick = ()=>{
        enigme[reste].classList.add("current-challenge");
        popupresult.classList.remove("active");
    };
}
function enleverClass(enigme){
    enigme.forEach(element=>{
        if(element.classList.contains("current-challenge"))
        element.classList.remove("current-challenge");
    });
}

function horloge(){
    let heure=0, minute =0, seconde = 0;

    return setInterval(()=>{
        seconde++;
        if(seconde == 60 ){
            minute ++;
            seconde = 0;
            if(minute == 60){
                heure++;
            }
        }
       document.getElementById("heure").innerHTML = `${format(heure)}:${format(minute)}:${format(seconde)}`;
    },1000);
}
function format(number){
    return (number<10)? "0"+number.toString():number.toString();
}














document.querySelectorAll("form").forEach(element => {
    element.onsubmit = (e)=>{
        e.preventDefault();
    }
});
btnEnigme1.onclick = ()=>{
    let userAnswer = document.querySelector('#answer-1').value;
    let rightAnswer = "SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS";
    popupresult.classList.add("active");
    enleverClass(enigme);
    if(userAnswer == rightAnswer){
        reussiSuivant(1);
        document.querySelector('#answer-1').value = "";
    }
    else{
        nonReussiReste(0);
    }
};

btnEnigme2.onclick = ()=>{
    let userAnswer = document.querySelector('#answer-2').value;
    
    let rightAnswer = "je ne connais pas la réponse";
    popupresult.classList.add("active");
    
    enleverClass(enigme);
    if(userAnswer == rightAnswer){
        reussiSuivant(2);
        document.querySelector('#answer-2').value = "";

    }
    else{
        nonReussiReste(1);
    }
};

btnEnigme3.onclick = ()=>{
    let userAnswer = document.querySelector('#answer-3').value;
    let rightAnswer = "je ne connais pas la réponse";
    popupresult.classList.add("active");
    enleverClass(enigme);
    if(userAnswer == rightAnswer){
        popupresult.classList.remove("active");
        popupFinal.classList.add("active");
        enleverClass(enigme);
        horlogeStopper =   horloge();
        document.querySelector(".revenir-accueil").onclick = ()=>{
            popupFinal.classList.remove("active");
            enigme[0].classList.add("current-challenge");
            clearInterval(horlogeStopper);
       document.getElementById("heure").innerHTML = `00:00:00`;

        };
        document.querySelector('#answer-3').value = "";

    }
    else{
        nonReussiReste(2);
    }
};
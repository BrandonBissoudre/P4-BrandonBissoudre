function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//*************************************************************************************ouverture et fermeture********************************************************************

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closemodal = document.querySelector(".close");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
closemodal.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}


//*************************************************************************************verification de champ********************************************************************

// DOM Elements
const champprenom = document.querySelector("#first")
const champnom = document.querySelector("#last")
const champemail = document.querySelector("#email")
const champnaissance = document.querySelector("#birthdate")
const champtournois = document.querySelector("#quantity")
const champlocalisation = document.querySelectorAll('input[type="radio"]')
const champcondition = document.querySelector("#checkbox1")
const champmodal = document.querySelector(".btn-submit")



function verifprenom(champprenom) {

  let regexprenom = /^[A-Za-zéèê-]+$/;
  let valeur = champprenom.value;

  if (regexprenom.test(valeur)) {
   
    //retirer l'erreur
    champprenom.parentNode.removeAttribute("data-error-visible")
    champprenom.parentNode.removeAttribute("data-error")
    return true; 
  } 

  else {
    //rajouter le texte en rouge
    champprenom.parentNode.setAttribute("data-error","Merci de rentrer un prenom valide")
    champprenom.parentNode.setAttribute("data-error-visible","true")
    return false;
  }
}


function verifnom(champnom) {

  let regexnom = /^[A-Za-z\é\è\ê\-]+$/;
  let valeur = champnom.value;

  if (regexnom.test(valeur)) {
   
    champnom.parentNode.removeAttribute("data-error-visible")
    champnom.parentNode.removeAttribute("data-error")
    return true; 
  }  
  
  else {
    champnom.parentNode.setAttribute("data-error","Merci de rentrer un nom valide")
    champnom.parentNode.setAttribute("data-error-visible","true")
    return false;
  }
}


function verifemail(champemail) {

  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let valeur = champemail.value;

  if (regexEmail.test(valeur)) {

    champemail.parentNode.removeAttribute("data-error-visible")
    champemail.parentNode.removeAttribute("data-error")
    return true;
  } 

  else {
    champemail.parentNode.setAttribute("data-error","Merci de rentrer un Email valide")
    champemail.parentNode.setAttribute("data-error-visible","true")
    return false;
  }
}



function verifnaissance(champnaissance) {
  
  let regexnaissance = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  let valeur = champnaissance.value;

  if (regexnaissance.test(valeur)) {

    champnaissance.parentNode.removeAttribute("data-error-visible")
    champnaissance.parentNode.removeAttribute("data-error")
    return true;
  } 
  
  else {
    champnaissance.parentNode.setAttribute("data-error","Merci de rentrer une date valide")
    champnaissance.parentNode.setAttribute("data-error-visible","true")
    return false;
  }
}



function veriftournois(champtournois) {

  let regextournois = /^[0-9]|[1-9][0-9]|100/;
  let valeur = champtournois.value;

  if (regextournois.test(valeur)) {

    champtournois.parentNode.removeAttribute("data-error-visible")
    champtournois.parentNode.removeAttribute("data-error")
    return true;
  } 
  
  else {

    champtournois.parentNode.setAttribute("data-error","Merci de rentrer un nombre de tournois")
    champtournois.parentNode.setAttribute("data-error-visible","true")
    return false;
  }
}


function veriflocalisation(champlocalisation) {

  console.log (champlocalisation)

  for (champ of champlocalisation) {
    if (champ.checked){
    return true
    }
  }

  return false
}



function verifcondition(champcondition) {

  if (champcondition.checked == true){ 
    return true;
  }

    return false
 
}


//*************************************************************************************Bouton validation********************************************************************

document.getElementById("form-modal").addEventListener("submit",validate)

function validate(e) {

  e.preventDefault()

  if ( verifprenom(champprenom) && verifnom(champnom) && verifemail(champemail) && verifnaissance(champnaissance) && veriftournois(champtournois) && veriflocalisation(champlocalisation) && verifcondition(champcondition)) {
    
    document.querySelector("#form-modal").style.display = "none";
    let newP = document.createElement('p')
    newP.textContent = 'votre inscription a bien été prise en compte'
    document.querySelector(".modal-body").appendChild(newP) 
    return true;
  } 
  
  else {
    return false;
  }

}


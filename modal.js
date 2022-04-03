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


//Verif Prenom
function verifprenom(champprenom) {

  //Regex Prenom
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

//Verif Nom
function verifnom(champnom) {

  //Regex Nom
  let regexnom = /^[A-Za-zéèê-]+$/;
  let valeur = champnom.value;

  if (regexnom.test(valeur)) {
   
    //retirer l'erreur
    champnom.parentNode.removeAttribute("data-error-visible")
    champnom.parentNode.removeAttribute("data-error")
    return true; 
  }  
  
  else {
    //rajouter le texte en rouge
    champnom.parentNode.setAttribute("data-error","Merci de rentrer un nom valide")
    champnom.parentNode.setAttribute("data-error-visible","true")
    return false;
  }
}

//Verif Email
function verifemail(champemail) {

  //Regex Email
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let valeur = champemail.value;

  if (regexEmail.test(valeur)) {

    //retirer l'erreur
    champemail.parentNode.removeAttribute("data-error-visible")
    champemail.parentNode.removeAttribute("data-error")
    return true;
  } 

  else {
    //rajouter le texte en rouge
    champemail.parentNode.setAttribute("data-error","Merci de rentrer un Email valide")
    champemail.parentNode.setAttribute("data-error-visible","true")
    return false;
  }
}


//Verif Date de Naissance
function verifnaissance(champnaissance) {
  
  //Regex Date de Naissance
  let regexnaissance = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  let valeur = champnaissance.value;

  if (regexnaissance.test(valeur)) {

    //retirer l'erreur
    champnaissance.parentNode.removeAttribute("data-error-visible")
    champnaissance.parentNode.removeAttribute("data-error")
    return true;
  } 
  
  else {
    //rajouter le texte en rouge
    champnaissance.parentNode.setAttribute("data-error","Merci de rentrer une date valide")
    champnaissance.parentNode.setAttribute("data-error-visible","true")
    return false;
  }
}


//Verif Nombre de tournois
function veriftournois(champtournois) {

  //Regex Nombre de tournois
  let regextournois = /^[0-9]|[1-9][0-9]|100/;
  let valeur = champtournois.value;

  if (regextournois.test(valeur)) {

    //retirer l'erreur
    champtournois.parentNode.removeAttribute("data-error-visible")
    champtournois.parentNode.removeAttribute("data-error")
    return true;
  } 
  
  else {

    //rajouter le texte en rouge
    champtournois.parentNode.setAttribute("data-error","Merci de rentrer un nombre de tournois")
    champtournois.parentNode.setAttribute("data-error-visible","true")
    return false;
  }
}


function veriflocalisation(champlocalisation) {

  // Verif Case localisation cocher
  for (champ of champlocalisation) {
    if (champ.checked){
    return true
    }
  }

  // Alert localisation si on decoche la case
  alert ('Merci de choisir une localisation')
  return false
}



function verifcondition(champcondition) {

  // Retirer l'alert si valide 
  let alert = document.getElementById('alertcondition')
  if (alert != null ) {
    alert.remove()
  }

  //Verif Case Condition
  if (champcondition.checked == true){
    return true;
  }

  //Creation de l'alert si la case n'est pas cocher
  let alertcondition = document.createElement('p')
  alertcondition.setAttribute('id','alertcondition')
  alertcondition.textContent = 'Merci de valider les condition'
  document.querySelector(".checkbox2-label").appendChild(alertcondition) 
  alertcondition.style.color = 'red';
  return false
 
}


//*************************************************************************************Bouton validation********************************************************************

document.getElementById("form-modal").addEventListener("submit",validate)

// Bouton de Validation Modal
function validate(e) {

  e.preventDefault()

  //recuperation de toute les Verif
  let erreurprenom = verifprenom(champprenom)
  let erreurnom = verifnom(champnom)
  let erreuremail = verifemail(champemail)
  let erreurnaissance = verifnaissance(champnaissance)
  let erreurtournos = veriftournois(champtournois)
  let erreurlocalisation = veriflocalisation(champlocalisation)
  let erreurcondition = verifcondition(champcondition)
  

  if ( erreurprenom && erreurnom && erreuremail && erreurnaissance && erreurtournos && erreurlocalisation && erreurcondition) {
    
    // Affichage de la validation
    document.querySelector("#form-modal").style.display = "none";
    let newP = document.createElement('p')
    newP.textContent = 'votre inscription a bien été prise en compte'
    document.querySelector(".modal-body").appendChild(newP) 
    newP.style.textAlign = 'center';
    newP.style.marginTop = '345px'
    newP.style.marginBottom = '345px'
    return true;

  } 
  
  else {
    return false;
  }

}


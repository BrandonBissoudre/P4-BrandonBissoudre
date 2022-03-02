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
const champlocalisation = document.querySelectorAll(".location")
const champcondition = document.querySelector("#checkbox1")
const champmodal = document.querySelector(".btn-submit")



function verifprenom(prenom) {

  let regexprenom = /^[A-Z][A-Za-z\é\è\ê\-]+$/;

  if (prenom.match(regexprenom)) {
    return true;
  } else {
    document.querySelector(".formData[data-error]")
    return false;

  }

}



function verifnom(nom) {

  let regexnom = /^[A-Z][A-Za-z\é\è\ê\-]+$/;

  if (nom.match(regexnom)) {
    return true;
  } else {
    document.querySelector(".formData[data-error]")
    return false;

  }

}


function verifemail(emailAdress) {

  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regexEmail)) {
    return true;
  } else {
    document.querySelector(".formData[data-error]")
    return false;

  }
}



function verifnaissance(naissance) {
  
  let regexnaissance = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

  if (naissance.match(regexnaissance)) {
    return true;
  } else {
    document.querySelector(".formData[data-error]")
    return false;

  }
}



function veriftournois() {

}



function veriflocalisation() {

}



function verifcondition() {

}


//*************************************************************************************Bouton validation********************************************************************



function validate() {

  if (verifemail(champemail) && verifnom(champnom) && verifprenom(champprenom) && verifnaissance(champnaissance)  ) {
    
    return true;
  } else {
    return false;
  }

}
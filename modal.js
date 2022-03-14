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
const champprenom = document.querySelector("#first").value
const champnom = document.querySelector("#last").value
const champemail = document.querySelector("#email").value
const champnaissance = document.querySelector("#birthdate").value
const champtournois = document.querySelector("#quantity").value
const champlocalisation = document.querySelector("input[name='location']")
const champcondition = document.querySelector("input[name='checkbox']")
const champmodal = document.querySelector(".btn-submit")



function verifprenom(champprenom) {

  let regexprenom = /^[A-Z][A-Za-zéèê-]+$/;
  console.log(champprenom)

  if (champprenom.match(regexprenom)) {
   
    //rajouter si c'est vrais l'erreur 
    return true; 
  } 

  else {
    //rajouter le texte en rouge 
    alert("Le Prenom n'est pas valide");
    //ligne pour le rajouter au champ
    document.querySelector(".formData[data-error]")
    return false;
  }
}


function verifnom(champnom) {

  let regexnom = /^[A-Z][A-Za-z\é\è\ê\-]+$/;

  if (champnom.match(regexnom)) {
    return true;
  } 
  
  else {
    alert("Le Nom n'est pas valide");
    document.querySelector(".formData[data-error]")
    return false;
  }
}


function verifemail(champemail) {

  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (champemail.match(regexEmail)) {
    return true;
  } 

  else {
    alert("L'email n'est pas valide");
    document.querySelector(".formData[data-error]");
    return false;
  }
}



function verifnaissance(naissance) {
  
  let regexnaissance = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

  if (naissance.match(regexnaissance)) {
    return true;
  } 
  
  else {
    document.querySelector(".formData[data-error]")
    return false;
  }
}



function veriftournois(tournois) {

  let regextournois = /^[0-9]|[1-9][0-9]|100/;

  if (tournois.match(regextournois)) {
    return true;
  } 
  
  else {
    document.querySelector(".formData[data-error]")
    return false;
  }
}


function veriflocalisation() {

  if (document.querySelector("input[name='location']").checked == true )
  
  { 
    return true;
  }

  else {
    alert ('merci de cocher une case')
    return false
  }
}



function verifcondition() {

  if (champcondition.checked == true)
  
  { 
    return true;
  }

  else {
    alert ('merci de cocher la case condition')
    return false
  }

}


//*************************************************************************************Bouton validation********************************************************************



function validate() {

  e.preventDefault()

  if ( verifprenom(champprenom) && verifnom(champnom) && verifemail(champemail) && verifnaissance(champnaissance) && veriftournois(champtournois) && veriflocalisation(champlocalisation) && verifcondition(champcondition)) {
    
    document.querySelector("form").style.display = none;
    let newP = document.createElement('p')
    newP.textContent = 'votre inscription a bien été prise en compte'
    document.querySelector(".modal-body").appendChild(newP) 
    return true;
  } 
  
  else {
    return false;
  }

}


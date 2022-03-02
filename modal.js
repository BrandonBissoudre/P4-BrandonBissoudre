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


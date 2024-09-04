// Nav functions
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelectorAll(".close-btn");
const formData = document.querySelectorAll(".formData");

/**
 * Form 
 */

// Form 
const form = document.getElementById('form');

// Validation functions
function inputValidation(field) {
  return (document.getElementById(field).value !== null) ? true : false;
}

function textValidation(field) {
 	return (document.getElementById(field).value !== null && document.getElementById(field).value.length > document.getElementById(field).getAttribute("minlength")) ? true : false;
}

 function emailValidation(field) {
 	let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
 	return regex.test(document.getElementById(field).value);
 }

 function dateValidation(field) {
  let regex = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/\-]\d{4}$/;
  return regex.test(document.getElementById(field).value);
}

 function quantityValidation(field) {
 	let regex = /^[0-9]+$/;
 	return regex.test(document.getElementById(field).value);
 }

 function locationValidation() {
 	for (let radio of document.querySelectorAll(".checkbox-input[type=radio]")) {
 		if (radio.checked === true) return true;
 	}
 	return false;
 }

 function checkboxValidation(field) {
 	return document.getElementById(field).checked;
 }

 // Submit function 
 document
 	.getElementById("submit")
 	.addEventListener("click", function formValidation(event) {
 		event.preventDefault();
 		let isValid = true;
    // Validate
    if (!textValidation("first")) {
      document.getElementById("first").parentNode.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
      document.getElementById("first").parentNode.setAttribute("data-error-visible", true);
 			isValid = false;
    } else 
      document.getElementById("first").parentNode.setAttribute("data-error-visible", false);

 		if (!textValidation("last")) {
      document.getElementById("last").parentNode.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
      document.getElementById("last").parentNode.setAttribute("data-error-visible", true);
 			isValid = false;
    } else 
      document.getElementById("last").parentNode.setAttribute("data-error-visible", false);

    if (!dateValidation("birthdate")) {
      document.getElementById("birthdate").parentNode.setAttribute("data-error", "Veuillez entrer une date de naissance.");
      document.getElementById("birthdate").parentNode.setAttribute("data-error-visible", true);
        isValid = false;
    } else 
      document.getElementById("birthdate").parentNode.setAttribute("data-error-visible", false);  

 		if (!emailValidation("email")) {
      document.getElementById("email").parentNode.setAttribute("data-error", "Veuillez entrer un email valide.");
      document.getElementById("email").parentNode.setAttribute("data-error-visible", true);
 			isValid = false;
    } else 
      document.getElementById("email").parentNode.setAttribute("data-error-visible", false);

 		if (!quantityValidation("quantity")) {
      document.getElementById("quantity").parentNode.setAttribute("data-error", "Veuillez choisir une quantité entre 0 et 99.");
      document.getElementById("quantity").parentNode.setAttribute("data-error-visible", true);
 			isValid = false;
    } else 
    document.getElementById("quantity").parentNode.setAttribute("data-error-visible", false);

 		if (!locationValidation()) {
      document.getElementById("locations").setAttribute("data-error", "Veuillez choisir une option.");
      document.getElementById("locations").setAttribute("data-error-visible", true);
 			isValid = false;
    } else 
      document.getElementById("locations").setAttribute("data-error-visible", false);

 		if (!checkboxValidation("checkbox1")) {
      document.getElementById("checkbox1").parentNode.setAttribute("data-error", "Veuillez vérifier que vous acceptez les termes et conditions.");
      document.getElementById("checkbox1").parentNode.setAttribute("data-error-visible", true);
 			isValid = false;
    } else 
      document.getElementById("checkbox1").parentNode.setAttribute("data-error-visible", false);

    // Then submit 
 		if (isValid) {
      console.log("Form is valid > submit")
 			form.submit();
 		} else 
      console.log("Form is not valid > show errors")

 	});


/**
 * Modal 
 */


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}



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
function textValidation(field) {
 	return (document.getElementById(field).value !== null && document.getElementById(field).value.length > 2) ? true : false;
}

 function emailValidation(field) {
 	let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
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
 			isValid = false;
 		} else if (!textValidation("last")) {
 			isValid = false;
 		} else if (!emailValidation("email")) {
 			isValid = false;
 		} else if (!quantityValidation("quantity")) {
 			isValid = false;
 		} else if (!locationValidation()) {
 			isValid = false;
 		} else if (!checkboxValidation("checkbox1")) {
 			isValid = false;
 		}
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



// Nav functions
// function editNav() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }
document
  .getElementById("myTopnav-button")
  .addEventListener("click", function editNav(event) {
    event.preventDefault();
    let myTopnav = document.getElementById("myTopnav");
    if (myTopnav.className === "topnav") {
      myTopnav.className += " responsive";
    } else {
      myTopnav.className = "topnav";
    }
  });

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
document.getElementById("submit-success").style.display = "none";

// Validation functions
/**
 * 
 * @param {String} field 
 */
function inputValidation(field) {
  return document.getElementById(field).value !== null;
}

/**
 * 
 * @param {String} field 
 */
function textValidation(field) {
  return (document.getElementById(field).value !== null && document.getElementById(field).value.length >= document.getElementById(field).getAttribute("minlength"));
}

/**
 * 
 * @param {String} field 
 */
function emailValidation(field) {
  let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
  return regex.test(document.getElementById(field).value);
}

/**
 * 
 * @param {String} field 
 */
function dateValidation(field) {
  let regex = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
  return regex.test(document.getElementById(field).value);
}

/**
 * 
 * @param {String} field 
 */
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

/**
 * 
 * @param {String} field 
 */
function checkboxValidation(field) {
  return document.getElementById(field).checked;
}

// Error function
function throwError(field, message) {
  if (field == 'location') field = 'location1';
  document.getElementById(field).parentNode.setAttribute("data-error", message);
  document.getElementById(field).parentNode.setAttribute("data-error-visible", true);
}

// Reset function
function resetError(field) {
  if (field == 'location') field = 'location1';
  document.getElementById(field).parentNode.setAttribute("data-error-visible", false);
}

// Submit function 
document
  .getElementById("btn-submit")
  .addEventListener("click", function formValidation(event) {
    event.preventDefault();
    let formData = new FormData(form);
    let isValid = true;

    // Default : Transform radio and checkbox null value first state  
    if (formData.get("location") === null) formData.append("location", "");
    if (formData.get("checkbox1") === null) formData.append("checkbox1", "");

    for (let field of formData.entries()) {
      // Reset error before testing 
      resetError(field[0]);

      // Testing field to thrown errors and validate form
      switch (field[0]) {
        case 'first':
        case 'last':
          if (!textValidation(field[0])) { isValid = false; throwError(field[0], "Veuillez entrer 2 caractères ou plus."); }
          break;
        case 'birthdate':
          if (!dateValidation(field[0])) { isValid = false; throwError(field[0], "Veuillez entrer une date de naissance.") };
          break;
        case 'email':
          if (!emailValidation(field[0])) { isValid = false; throwError(field[0], "Veuillez entrer un email valide.") };
          break;
        case 'quantity':
          if (!quantityValidation(field[0])) { isValid = false; throwError(field[0], "Veuillez choisir une quantité entre 0 et 99.") };
          break;
        case 'location':
          if (!locationValidation()) { isValid = false; throwError(field[0], "Veuillez choisir une option.") };
          break;
        case 'checkbox1':
          if (!checkboxValidation(field[0])) { isValid = false; throwError(field[0], "Veuillez vérifier que vous acceptez les termes et conditions.") };
          break;
      }
    };

    // Then submit
    if (isValid) {
      console.log("Form is valid > submit"); //form.submit();
      // Iterate through entries and print them
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

      // Show validation state
      form.style.display = "none";
      document.getElementById("submit-success").style.display = "block";
    } else {
      console.log("Form is not valid > throw errors");

      // Hide validation state
      form.style.display = "block";
      document.getElementById("submit-success").style.display = "none";
    }
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
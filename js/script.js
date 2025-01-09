'use strict';
// *** Form ***
const mainContainer = document.querySelector('.main__container');
const errorMessage = document.querySelector('.main__form-errMessage');
const formBtn = document.querySelector('.main__form-btn');
const formPopup = document.querySelector('.main__popup');

formBtn.addEventListener('click', e => {
  e.preventDefault();

  checkErrorMessage();
});

function checkErrorMessage() {
  const emailInput = document.querySelector('.main__form-email');

  const emailInputValue = emailInput.value.trim().toLowerCase();

  const messageEmailValue = document.querySelector('.main__popup-email');

  messageEmailValue.textContent = emailInputValue;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailInputValue === '' || !emailRegex.test(emailInputValue)) {
    errorMessage.classList.add('active');
    emailInput.classList.add('email-error');
  } else {
    errorMessage.classList.remove('active');
    emailInput.classList.remove('email-error');

    // *** Form Popup Message ***
    formPopup.classList.remove('hidden');
    mainContainer.classList.add('hidden');
  }
}
// *** End of Form ***

const dismissBtn = document.querySelector('.main__popup-btn');

dismissBtn.addEventListener('click', backToForm);

function backToForm() {
  formPopup.classList.add('hidden');
  mainContainer.classList.remove('hidden');
}

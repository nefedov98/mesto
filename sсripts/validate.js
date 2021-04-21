// спасибо что помогли мне разобраться в моем же коде))
const validationConfig = {
    button: '.popup__save',
    form : '.form',
    inputSelector: '.form__input',
    buttonInvalid: 'popup__save_invalid',
    inputInvalid: 'form__input_invalid'
}  

function setFieldError(field) {
    const span = field.nextElementSibling;
    span.textContent = field.validationMessage;
}

function setSubmitButtonState(form, config) {
    const button = form.querySelector(config.button); 
    const isValid = form.checkValidity();                       
    console.log(isValid)
    if (isValid) {
        button.removeAttribute('disabled');
        button.classList.remove(config.buttonInvalid); 
    } else {
        button.setAttribute('disabled', true);
        button.classList.add(config.buttonInvalid);
    }
}

function setCustomError(input, config) {
    const validity = input.validity;
    input.setCustomValidity('');
    if (validity.tooShort || validity.tooLong) {
        const current = input.value.length;
        const min = input.getAttribute('minlength');
        const max = input.getAttribute('maxlength')
        input.setCustomValidity(`Строка слишком короткая. Введено ${current} символов, а должно быть от ${min} до ${max}`);
        input.classList.add(config.inputInvalid);
    }
    else if (validity.typeMismatch && input.type === 'url') {
        input.setCustomValidity('Здесь должна быть ссылка');
        input.classList.add(config.inputInvalid);
    }
    else {
        input.classList.remove(config.inputInvalid); 
    }
}



  function setEventListeners(form, config) {
    form.addEventListener('input', (evt) => {
    const input = evt.target;
    setCustomError(input, config);
    setFieldError(input);
    setSubmitButtonState(form, config);
  });
 }


  function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.form));
    formList.forEach((form) => {
        form.addEventListener('submit', (evt) => {
          evt.preventDefault();
        });


      setEventListeners(form, config);
  });
}

enableValidation(validationConfig);




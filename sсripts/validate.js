// в общем не знаю как хорошо я справился, но я старался и сделал все что мог... в любом случае спасибо вам за вашу работу!!
const validationConfig = {
    button: '.popup__save',
    form : '.form',
    inputSelector: '.form__input'
}  


const form = document.querySelector(validationConfig.form);
form.addEventListener('submit', handleSubmitForm);

form.addEventListener('input', eventHandler);

function eventHandler(event) {
    const input = event.target;
    setCustomError(input);
    setFieldError(input);
    setSubmitButtonState(form);
}

function handleSubmitForm(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    if (isValid) {
        console.log('Форма валидна!');
    } else {
        console.log('Форма НЕ валидна!');
    }
}

function setFieldError(field) {
    const span = field.nextElementSibling;
    span.textContent = field.validationMessage;
}

function setSubmitButtonState(form) {
    const input = form.querySelectorAll('.form__input');
    const button = form.querySelector(validationConfig.button);
    const isValid = form.checkValidity();
    console.log(isValid)
    if (isValid) {
        button.removeAttribute('disabled');
        button.classList.remove('popup__save_invalid');
    } else {
        button.setAttribute('disabled', true);
        button.classList.add('popup__save_invalid');
    }
}

function setCustomError(input) {
    const validity = input.validity;
    input.setCustomValidity('');
    if (validity.tooShort || validity.tooLong) {
        const current = input.value.length;
        const min = input.getAttribute('minlength');
        const max = input.getAttribute('maxlength')
        input.setCustomValidity(`Строка слишком короткая. Введено ${current} символов, а должно быть от ${min} до ${max}`);
        input.classList.add('form__input_invalid');
    }
    else if (validity.typeMismatch && input.type === 'url') {
        input.setCustomValidity('Здесь должна быть ссылка');
        input.classList.add('form__input_invalid');
    }
    else {
        input.classList.remove('form__input_invalid');
    }
}



  function setEventListeners(form) {
    form.addEventListener('input', (evt) => {
    const input = evt.target;
    setCustomError(input);
    setFieldError(input);
    setSubmitButtonState(form);
  });
 }


  function enableValidation(validationConfig) {
    const formList = Array.from(document.querySelectorAll(validationConfig.form));
    formList.forEach((form) => {
        form.addEventListener('submit', (evt) => {
          evt.preventDefault();
        });


      setEventListeners(form);
  });
}

enableValidation(validationConfig);




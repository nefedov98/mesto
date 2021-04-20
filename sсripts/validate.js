// в общем не знаю как хорошо я справился, но я старался и сделал все что мог... в любом случае спасибо вам за вашу работу!!
const validationConfig = {
    button: '.popup__save',
    form : '.form',
    inputSelector: '.form__input',
    buttonInvalid: 'popup__save_invalid',
    inputInvalid: 'form__input_invalid'
}  


const form = document.querySelector(validationConfig.form);
form.addEventListener('submit', handleSubmitForm);

form.addEventListener('input', eventHandler);

function eventHandler(event, config) {
    const input = event.target;
    setCustomError(input, config);
    setFieldError(input, config);
    setSubmitButtonState(form, config);
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

function setSubmitButtonState(form, config) {
    const button = form.querySelector(validationConfig.button); // почему-то в этих моментах если я передаю просто config, 
    const isValid = form.checkValidity();                       //консоль выдает ошибку, но все работает, а если вот так то все отлично и без ошибок
    console.log(isValid)
    if (isValid) {
        button.removeAttribute('disabled');
        button.classList.remove(validationConfig.buttonInvalid); //тут
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
        input.classList.remove(validationConfig.inputInvalid); //тут, а так вроде все отлично)
    }
}



  function setEventListeners(form, config) {
    form.addEventListener('input', (evt) => {
    const input = evt.target;
    setCustomError(input, config);
    setFieldError(input, config);
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




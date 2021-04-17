
const validationConfig = {
    formUser: '.form[name="form_name"]',
    formPlace: '.form[name="form_place"]',
    button: '.popup__save',
    form :'.form'
}  


const form = document.querySelector(validationConfig.form);
const formUser = document.querySelector(validationConfig.formUser);
const formPlace = document.querySelector(validationConfig.formPlace);
formUser.addEventListener('submit', handleSubmitForm);

formUser.addEventListener('input', eventHandlerformUser);

formPlace.addEventListener('submit', handleSubmitForm);

formPlace.addEventListener('input', eventHandlerformPlace);

function eventHandlerformUser (event) {
    const input = event.target;
    setCustomError(input);
    setFieldError(input);
    setSubmitButtonState(formUser);
}

function eventHandlerformPlace (event) {
    const input = event.target;
    setCustomError(input);
    setFieldError(input);
    setSubmitButtonState(formPlace);
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

function keyHandler (evt) {
    if (evt.key === "Escape"){
        const openedPopup = document.querySelector('.popup_active');
        openedPopup.classList.remove('popup_active')
    }
}

document.addEventListener('keydown', keyHandler);

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
    });
    });
};

enableValidation(validationConfig);


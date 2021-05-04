



export class FormValidator {
    constructor(config) {
        this._config = config;
    }

    _setFieldError(field) {
        const span = field.nextElementSibling;
        span.textContent = field.validationMessage;
    }
    
    _setSubmitButtonState(form) {
        const button = form.querySelector(this._config.button); 
        const isValid = form.checkValidity();                       
        console.log(isValid)
        if (isValid) {
            button.removeAttribute('disabled');
            button.classList.remove(this._config.buttonInvalid); 
        } else {
            button.setAttribute('disabled', true);
            button.classList.add(this._config.buttonInvalid);
        }
    }
    
    _setCustomError(input) {
        const validity = input.validity;
        input.setCustomValidity('');
        if (validity.tooShort || validity.tooLong) {
            const current = input.value.length;
            const min = input.getAttribute('minlength');
            const max = input.getAttribute('maxlength')
            input.setCustomValidity(`Строка слишком короткая. Введено ${current} символов, а должно быть от ${min} до ${max}`);
            input.classList.add(this._config.inputInvalid);
        }
        else if (validity.typeMismatch && input.type === 'url') {
            input.setCustomValidity('Здесь должна быть ссылка');
            input.classList.add(this._config.inputInvalid);
        }
        else {
            input.classList.remove(this._config.inputInvalid); 
        }
    }
    
    
    
      _setEventListeners(form) {
        form.addEventListener('input', (evt) => {
        const input = evt.target;
        this._setCustomError(input);
        this._setFieldError(input);
        this._setSubmitButtonState(form);
      });
     }
    
    
      enableValidation() {
        const formList = Array.from(document.querySelectorAll(this._config.form));
        formList.forEach((form) => {
            form.addEventListener('submit', (evt) => {
              evt.preventDefault();
            });
    
    
          this._setEventListeners(form);
      });
    }
}
export const validationConfig = new FormValidator({
    button: '.popup__save',
    form : '.form',
    inputSelector: '.form__input',
    buttonInvalid: 'popup__save_invalid',
    inputInvalid: 'form__input_invalid'
}  );


validationConfig.enableValidation();
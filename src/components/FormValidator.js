
export class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
        this._button = form.querySelector(this._config.button);
    }

    _setFieldError(field) {
        const span = field.nextElementSibling;
        span.textContent = field.validationMessage;
    }
    
    setSubmitButtonState() {
        const isValid = this._form.checkValidity();                       
        console.log(isValid)
        if (isValid) {
            this._button.removeAttribute('disabled');
            this._button.classList.remove(this._config.buttonInvalid); 
        } else {
            this._button.setAttribute('disabled', true);
            this._button.classList.add(this._config.buttonInvalid);
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
        else if (input.validity === '') {
            console.log('sasa')
            input.setCustomValidity('EWEWEW');
            input.classList.add(this._config.inputInvalid);
        }
        else {
            input.classList.remove(this._config.inputInvalid); 
        }
    }
    
    
    
      _setEventListeners() {
        this._form.addEventListener('input', (evt) => {
        const input = evt.target;
        this._setCustomError(input);
        this._setFieldError(input);
        this.setSubmitButtonState();
      });
     }
    
    
      enableValidation() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
    
          this._setEventListeners();
      };
}




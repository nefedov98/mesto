import Popup from './popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, {handleFormSubmit}) {
        super(popupSelector);
        // this._popup = document.querySelector(popupSelector);
        this._popupForm = this._popup.querySelector('.form'); 
        this._button = this._popup.querySelector('button[type="submit"]');
        this._handleFormSubmit = handleFormSubmit;
        this._inputList = this._popup.querySelectorAll('.form__input');

    }

    setEventListeners = () => {
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
        super.setEventListeners();
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.id] = input.value);
        console.log(this._formValues)
        return this._formValues;
    }
    
    close() {
        super.close();
        this._popupForm.reset();
    }
    
    renderLoading(isSending) {
        this._button.textContent = isSending ? 'Сохранение...' : this._buttonDefaultText;
    }
}


import Popup from './popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, {handleFormSubmit}) {
        super(popupSelector);
        this._popupForm = this._popupSelector.querySelector('.form');
        this._button = this._popupSelector.querySelector('button[type="submit"]');
        this._handleFormSubmit = handleFormSubmit;
    }

    _setEventListeners = () => {
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            
            // this.close();
        });

        super._setEventListeners();
    }

    _getInputValues() {
        this._inputList = this._popupElement.querySelectorAll('.form__input');
        this._formValues = {};

        this._inputList.forEach(input => this._formValues[input.name] = input.value);

        return this._formValues;
    }
    
    close() {
        super.close();
        this._popupForm.reset();
    }

    open() {
        this.setEventListeners()
        super.open()
      }
}


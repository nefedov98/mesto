import Popup from './popup.js';

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() { 
        this._inputObj = {};
        this._inputList.forEach(input => this._inputObj[input.name] = input.value);
        return this._inputObj;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues()); 
        })  
    }

    close() {
        super.close();
        this._popupForm.reset();
    }

}


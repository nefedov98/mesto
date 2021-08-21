import Popup from './popup.js';

export default class PopupWithImage extends Popup {
    constructor ({popupSelector}){
        super(popupSelector)
        this._popupSelector = popupSelector
        this._popupCaption = this._popupSelector.querySelector('.popup__full-caption')
        this._popupImage = this._popupSelector.querySelector('.popup__full-image');
    }

open(name, link) {
    this._popupCaption.textContent = name;
    this._popupImage.src = link;
    this._popupImage.alt = `${name}`;

    super.open();
    }
}


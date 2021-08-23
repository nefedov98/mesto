import Popup from './popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector)
        // this._popup = document.querySelector(popupSelector);
        this._popupCaption = this._popup.querySelector('.popup__full-caption')
        this._popupImage = this._popup.querySelector('.popup__full-image');
    }

open(name, link) {
    this._popupCaption.textContent = name;
    this._popupImage.src = link;
    this._popupImage.alt = `${name}`;

    super.open();
    }
}


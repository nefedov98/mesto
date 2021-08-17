import Popup from './popup.js';

export default class PopupWithImage extends Popup {
    constructor (popupSelector){
        super(popupSelector)
    }

open(name, link) {
    this._popupSelector.querySelector('.popup__full-caption').textContent = name;
    const image = this._popupSelector.querySelector('.popup__full-image');
    image.src = link;
    image.alt = `${name}`;

    super.open();
    }
}


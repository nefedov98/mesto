import Popup from './popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._popupSelector = popupSelector
        this._srcImage = this._popupSelector.querySelector(".popup__full-image");
        this._nameImage = this._popupSelector.querySelector(".popup__full-caption");
    }

open(name, link) {
    this._nameImage.textContent = name;
    this._srcImage.src = link;
    this._srcImage.alt = name;

    super.open()
    }
    // Создайте класс PopupWithImage, который наследует от Popup. Этот класс должен перезаписывать родительский метод open. 
    // В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.
}

// function openPicture (name, link) { 
//     nameImage.textContent = name;
//     srcImage.src = link;
//     srcImage.alt = name;
//     fullImage.open()
// }  
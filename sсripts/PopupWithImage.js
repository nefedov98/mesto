import Popup from './popup.js';

export default class PopupWithImage extends Popup {
    // constructor(popupSelector,name, link) {
    //     this._popupSelector = popupSelector
    //     this._srcImage = this._popup.querySelector(".popup__full-image");
    //     this._nameImage = this._popup.querySelector(".popup__full-caption");
    // }

open() {
    super.open()
    // _nameImage.textContent = name;
    // _srcImage.src = link;
    // _srcImage.alt = name;

    }
    // Создайте класс PopupWithImage, который наследует от Popup. Этот класс должен перезаписывать родительский метод open. 
    // В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.
}


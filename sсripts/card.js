export class Card {
    constructor(data, cardSelector, handleOpenPopup) { //передаем при создании экземляра
        this._text = data.name;
        this._image = data.link;
        this._cardSelector = cardSelector;
        this._handleOpenPopup = handleOpenPopup;
    }  

    _getTemplate() {
        const placeElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.photos__card')
            .cloneNode(true);

        return placeElement;
    }

    _setEventListeners() {
        this._element.querySelector('.photos__delete').addEventListener('click', () => {
            this._deleteCard();
        });
        this._element.querySelector('.photos__like-button').addEventListener('click', () => {
            this._toggleLike();
        });
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleOpenPopup(this._text, this._image) //передаем данные
        }); 
    }

    _toggleLike() {
        this._element.querySelector('.photos__like-button').classList.toggle('photos__like-button_liked');
    }

    _deleteCard() {
        targetPlace.remove();
        this._element = null;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._titleElement = this._element.querySelector(".photos__title");
        this._titleElement = this._name;
        this._imageElement = this._element.querySelector(".photos__image");
        this._imageElement = this._link;
        this._altElement = this._element.querySelector(".photos__image");
        this._altElement = this._link;

        this._likeButton = this._element.querySelector(".photos__like-button");
        this._deleteButton = this._element.querySelector(".photos__delete");
        this._setEventListeners();
        return this._element;
    }
}



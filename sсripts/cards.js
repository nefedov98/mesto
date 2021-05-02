

export class Card {
    constructor(data, cardSelector) {
        this._link = data.link;
        this._name = data.name
        this._cardSelector = cardSelector;
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
    }

    _toggleLike() {
        this._element.querySelector('.photos__like-button').classList.toggle('photos__like-button_liked');
    }

    _deleteCard() {
        targetPlace.remove();
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.photos__image').src = this._link;
        this._element.querySelector('.photos__image').alt = this._link;
        this._element.querySelector('.photos__title').textContent = this._name;
        this._setEventListeners();
        return this._element;
    }
}


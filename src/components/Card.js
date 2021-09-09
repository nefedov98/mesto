export class Card {
    constructor({data}, cardSelector, handleOpenPopup,{handleDelete},{handleLikeClick},api) { 
        this._text = data.name;
        this._image = data.link;
        this._likes = data.likes;
        this.id = data._id;
        this._userId = data.currentUserId;
        this._ownerId = data.owner._id;
        this._cardSelector = cardSelector;
        this._handleOpenPopup = handleOpenPopup;
        this._handleDelete = handleDelete;
        this._handleLikeClick = handleLikeClick;
        this._api = api;
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
        this._deleteButton.addEventListener('click', () => {
            this._handleDelete()
        });
        this._likeButton.addEventListener('click', () => {
            this._handleLikeClick();
        });
        this._imageElement.addEventListener('click', () => {
            this._handleOpenPopup(this._text, this._image) 
        }); 
    }
    
    deleteCard() {
        this._element.remove();
        this._element = null;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._titleElement = this._element.querySelector(".photos__title");
        this._titleElement.textContent = this._text;
        this._imageElement = this._element.querySelector(".photos__image");
        this._imageElement.src = this._image;
        this._imageElement.alt = this._image;
        this._likeButton = this._element.querySelector(".photos__like-button");
        this._deleteButton = this._element.querySelector(".photos__delete");
        this._deleteButton.classList.add(this._userId === this._ownerId ? 'photos__delete_visible' : 'photos__delete_hidden');
        this._element.querySelector('.photos__likes').textContent = this._likes.length;
        if(this._likes.find((obj) => this._userId === obj._id)) {
          this._element.querySelector('.photos__like-button').classList.add('photos__like-button_liked')
        }
        this._setEventListeners();
        return this._element;
    }

    handleLikeCard() {
        const likeButton = this._element.querySelector('.photos__like-button')
        const likeCount = this._element.querySelector('.photos__likes')
    
        if(!(likeButton.classList.contains('photos__like-button_liked'))) {
          this._api.like(this.id)
            .then((data) => {
              likeButton.classList.add('photos__like-button_liked')
              likeCount.textContent = data.likes.length
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          this._api.dislike(this.id)
            .then((data) => {
              likeButton.classList.remove('photos__like-button_liked')
              likeCount.textContent = data.likes.length
            })
            .catch((err) => {
              console.log(err)
            })
        }
      }
}



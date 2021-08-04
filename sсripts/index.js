import '../pages/index.css';

import { initialCards } from './initial-сards.js';
import { Card } from './card.js';
import { FormValidator } from './validate.js';

import Popup from './popup.js';
import Section from './section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';

const openButton = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup_edit');
const closeButtonEdit = popupEdit.querySelector('.popup__close');
const formElementEdit = popupEdit.querySelector(".form");
const nameInput = popupEdit.querySelector(".form__input_name");
const jobInput = popupEdit.querySelector(".form__input_job");
const profileNameElement = document.querySelector('.profile__title');
const job = document.querySelector(".profile__subtitle");
const buttonAddImage = document.querySelector('.profile__add');
const popupAddImage = document.querySelector('.popup_image');
const buttonCloseImage = popupAddImage.querySelector('.popup__close');
const titleInput = document.querySelector(".form__input_title");
const linkInput = document.querySelector(".form__input_link");
const nameForm = document.querySelector(".form__input_name");
const aboutForm = document.querySelector(".form__input_job");
const photos = document.querySelector('.photos__list')
const itemTemplate = document.querySelector('.item-template').content;
const formElementAdd = document.querySelector(".form_add");
const buttonSaveImage = document.querySelector('.popup__save_image');

const popupFull = document.querySelector('.popup_full');

const closeButtonFull = document.querySelector('.popup__close_full');

function handleEditProfileClick () {
    nameInput.value = profileNameElement.textContent;
    jobInput.value = job.textContent;
    popupEditForm.open();
}

function handleProfileSubmit  (evt) {
    evt.preventDefault();
    profileNameElement.textContent = nameInput.value;
    job.textContent = jobInput.value;
    popupEditForm.close();
}

popupEdit.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        popupEditForm.close();
    }
})

popupAddImage.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        popupAddForm.close();
    }
})

popupFull.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        fullImage.close();
    }
})

// const srcImage = document.querySelector(".popup__full-image");
// const nameImage = document.querySelector(".popup__full-caption");

function handleCreate(evt) {
    evt.preventDefault();
    const item = {
        name: titleInput.value,
        link: linkInput.value
    }
    const card = new Card(item, '.item-template', handleCardClick)
    photos.prepend(card.generateCard())
    
    formElementAdd.reset();
    addFormValidation.setSubmitButtonState();
    popupAddForm.close();
}



openButton.addEventListener('click', handleEditProfileClick);

formElementEdit.addEventListener('submit', handleProfileSubmit );

formElementAdd.addEventListener('submit', handleCreate);



function handleCardClick (name, link) { 
    fullImage.open(name, link)
}  

const editForm = document.forms.editForm;
const addForm = document.forms.addForm;

const validationConfig = {
    button: '.popup__save',
    form : '.form',
    inputSelector: '.form__input',
    buttonInvalid: 'popup__save_invalid',
    inputInvalid: 'form__input_invalid'
}


const addFormValidation =  new FormValidator( validationConfig,  addForm);
addFormValidation.enableValidation();

const editFormValidation =  new FormValidator( validationConfig,  editForm);
editFormValidation.enableValidation();


const cardList = new Section({
	data: initialCards, 
	renderer: (item)=> {
		const card = new Card(item,'.item-template');
        photos.prepend(card.generateCard())
	}
 }, 
 );

 cardList.rendererItem();





const popupAddForm = new PopupWithForm(popupAddImage)
const popupEditForm = new PopupWithForm(popupEdit, handleProfileSubmit)
const fullImage = new PopupWithImage(popupFull);

buttonAddImage.addEventListener('click', () => {
    popupAddForm.open();
  });

buttonCloseImage.addEventListener('click', () => {
    popupAddForm.close();
});

openButton.addEventListener('click', () => {
    popupEditForm.open();
  });

closeButtonEdit.addEventListener('click', () => {
    popupEditForm.close();
});



closeButtonFull.addEventListener('click', () => {
    fullImage.close();
})

// const qqqqqq = document.querySelector('.photos__image')


// qqqqqq.addEventListener('click', () => {
//     console.log('eeeeeeeee')
//     fullImage.open()
// })
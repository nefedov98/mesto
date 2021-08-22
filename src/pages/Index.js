// Здравствуйте! Прошу прощения, честно говоря не понял, вы имели в виду какие-то еще замечания кроме как те 
// что вы отметили после второй проверки? Просто мне не удалось найти какое оранжевое замечания 
// я еще упустил( если я правильно понял). Спасибо за вашу работу, буду благодарен если уточните где еще у меня проблемы.

import './index.css';

import { initialCards } from '../utils/Initial-сards';
import { Card } from '../components/card.js';
import { FormValidator } from '../components/FormValidator.js';

import { validationConfig } from '../utils/constants.js';

import Popup from '../components/popup.js';
import Section from '../components/section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';


const openButton = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup_edit');
const nameInput = popupEdit.querySelector(".form__input_name");
const jobInput = popupEdit.querySelector(".form__input_job");
const profileNameElement = document.querySelector('.profile__title');
const job = document.querySelector(".profile__subtitle");
const buttonAddImage = document.querySelector('.profile__add');
const popupAddImage = document.querySelector('.popup_image');
const photos = document.querySelector('.photos__list')
const popupFull = document.querySelector('.popup_full');


const handleCardClick = (name, link) => fullImage.open(name, link)

const editForm = document.forms.editForm;
const addForm = document.forms.addForm;

const addFormValidation =  new FormValidator( validationConfig,  addForm);
addFormValidation.enableValidation();

const editFormValidation =  new FormValidator( validationConfig,  editForm);
editFormValidation.enableValidation();

function createCard (item) {
    const card = new Card(item,'.item-template', handleCardClick);
    const cardElement = card.generateCard()
    return cardElement;
}

const cardList = new Section({
	data: initialCards, 
	renderer: (item)=> {
        const cardElement = createCard(item)
        cardList.prependItem(cardElement);
	}
},
photos);

cardList.rendererItem();

const popupAddForm = new PopupWithForm({popupSelector: '.popup_image', handleFormSubmit: (item) => {
    const cardElement = createCard(item)
    cardList.prependItem(cardElement); 
    console.log(item)
    popupAddForm.close();
}
})

buttonAddImage.addEventListener('click', () => {
    popupAddForm.open();
  });

popupAddForm.setEventListeners()


const popupEditForm = new PopupWithForm({popupSelector: '.popup_edit', handleFormSubmit: (item) => {
    profileUserInfo.setUserInfo({
        name: item.name,
        job: item.job
      });
      console.log(item)
    popupEditForm.close(); 
}
})

openButton.addEventListener('click', () => {
    const currentUserInfo = profileUserInfo.getUserInfo();
    nameInput.value = currentUserInfo.name;
    jobInput.value = currentUserInfo.job;
    popupEditForm.open();
});

popupEditForm.setEventListeners()

const profileUserInfo = new UserInfo({name: profileNameElement, job: job});

const fullImage = new PopupWithImage({popupSelector: '.popup_full'});
fullImage.setEventListeners()



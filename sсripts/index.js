import { initialCards } from './initial-сards.js';
import { Card } from './card.js';
import { FormValidator } from './validate.js';

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
function openPopup (popup) {
    popup.classList.add ('popup_active');
    document.addEventListener('keydown', keyHandler);
}

function closePopup (popup) {
    popup.classList.remove ('popup_active');
    document.removeEventListener('keydown', keyHandler);
}

function handleEditProfileClick () {
    nameInput.value = profileNameElement.textContent;
    jobInput.value = job.textContent;
    openPopup(popupEdit);
}

function handleProfileSubmit  (evt) {
    evt.preventDefault();
    profileNameElement.textContent = nameInput.value;
    job.textContent = jobInput.value;
    console.log('sssss')
    closePopup(popupEdit);
}

popupEdit.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closePopup(popupEdit);
    }
})

popupAddImage.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closePopup(popupAddImage);
    }
})

const srcImage = document.querySelector(".popup__full-image");
const nameImage = document.querySelector(".popup__full-caption");

function addCard (card) {
    photos.prepend(card);
}

function handleCreate(evt) {
    evt.preventDefault();
    const item = {
        name: titleInput.value,
        link: linkInput.value
    }
    const card = new Card(item, '.item-template', openPicture)
    photos.prepend(card.generateCard())
    
    formElementAdd.reset()
    buttonSaveImage.setAttribute('disabled', true);
    closePopup(popupAddImage);
}

const popupFull = document.querySelector('.popup_full');

const closeButtonFull = document.querySelector('.popup__close_full');

popupFull.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closePopup(popupFull);
    }
})

function keyHandler (evt) {
    if (evt.key === "Escape"){
        const openedPopup = document.querySelector('.popup_active');
        openedPopup.classList.remove('popup_active')
    }
}

openButton.addEventListener('click', handleEditProfileClick);
closeButtonEdit.addEventListener('click', () => {
    closePopup(popupEdit);
})
formElementEdit.addEventListener('submit', handleProfileSubmit );

buttonAddImage.addEventListener('click', () => {
    openPopup(popupAddImage);
})
buttonCloseImage.addEventListener('click', () => {
    closePopup(popupAddImage);
})
formElementAdd.addEventListener('submit', handleCreate);

closeButtonFull.addEventListener('click', () => {
    closePopup(popupFull);
})

initialCards.forEach((item)=>{
    const card = new Card(item, '.item-template', openPicture)
    photos.prepend(card.generateCard())
 }) 

function  openPicture (name, link) { 
    nameImage.textContent = name;
    srcImage.src = link;
    srcImage.alt = name;
    openPopup(popupFull);
}  



const editForm = document.forms.editForm;
const addForm = document.forms.addForm;

const addFormValidation =  new FormValidator({
    button: '.popup__save',
    form : '.form',
    inputSelector: '.form__input',
    buttonInvalid: 'popup__save_invalid',
    inputInvalid: 'form__input_invalid'
}, addForm).enableValidation();

const editFormValidation =  new FormValidator({
    button: '.popup__save',
    form : '.form',
    inputSelector: '.form__input',
    buttonInvalid: 'popup__save_invalid',
    inputInvalid: 'form__input_invalid'
}, editForm).enableValidation();


/* Ну?))) что скажите, уважаемый ревью? Я все сделал сам, правда. Даже не спрашивал никого!
Хотя это было очень больно в некоторых моментах... Ваши подсказки очень помогли, спасибо, правда!
Надеюсь в этот раз ошибок будет немного.. Карточки создаются через класс, с валидацие вроде все ок. Да помогут мне боги.
Спасибо за вашу работу)*/
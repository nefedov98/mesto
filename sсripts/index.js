import { initialCards } from './initial-сards.js';
import { Card } from './card.js';
import { FormValidator } from './validate.js';
import { validationConfig } from './validate.js'

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

function handleLikeIcon (event) {
    event.target.classList.toggle('photos__like-button_liked');
}

function renderItem(item) {
	const htmlElement = itemTemplate.cloneNode(true);
    const text = htmlElement.querySelector('.photos__title');
    text.textContent = item.name;
    const img = htmlElement.querySelector('.photos__image');
    img.src = item.link;
    img.alt = item.name;
    const likeButton = htmlElement.querySelector(".photos__like-button");
    likeButton.addEventListener('click', (event) => {
        handleLikeIcon(event);
    });
    htmlElement.querySelector('.photos__delete').addEventListener('click', handleDelete);

    img.addEventListener('click', () => {
        handlePreviewPicture(item);
    });
    return htmlElement;
}

function handlePreviewPicture (item) {
    nameImage.textContent = item.name ;
    srcImage.src = item.link;
    srcImage.alt = item.name;
    openPopup(popupFull);
}


function addCard (card) {
    photos.prepend(card);
}

function handleCreate(evt) {
    evt.preventDefault();
    const item = {
        name: titleInput.value,
        link: linkInput.value
    }
    const card = renderItem(item);    
    addCard(card);
    formElementAdd.reset()
    buttonSaveImage.setAttribute('disabled', true);
    buttonSaveImage.classList.add(validationConfig.buttonInvalid);
    closePopup(popupAddImage);
}

initialCards.reverse().forEach(function (item) {
    const card = renderItem(item);
    addCard(card);
})

function handleDelete (evt) {
    evt.target.closest('.photos__card').remove();
}

const popupFull = document.querySelector('.popup_full');
const openButtonFull = document.querySelector('.photos__image');

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


/*Здравствуйте, уважаемый ревью, я знаю что с вами нельзя вести беседы. Но я уже себе голову сломал,
не понимаю как мне сделать все через эти блин класс, как сделать их полезными. Можно совет?) буду крайне благодарен..
ниже жалкие попытки что-то создать основываясь на собственных умственных потугах и примере кода товарищей..
дайте пинок пожалуйста.. а я пока почитаю теорию снова













Нужно в index.js там где массив изначальных данных перебираешь на каждой итерации создавать инстанс класса Card,
вызвать у него метод, который возвращает заполненый шаблон и вставлять этот результат на страницу. Что-то вроде
initialCards.forEach(()=>{
   const card = new Card({text: ..., link: ...})
   list.prepend(card.getCard())
})


function  openPicture (name, link) { //принимает данные
    nameImage.textContent = item.name ;
    srcImage.src = item.link;
    srcImage.alt = item.name;
    openPopup(popupFull);
}  



 function handleFormSubmitPopupEdit(evt) {
    evt.preventDefault();
  
    profileNameElement.textContent = nameForm.value;
    job.textContent = aboutForm.value;
  
    closePopup(popupEdit);
  }
  
  function handleFormSubmitPopupAdd(evt) {
    evt.preventDefault();
  
    const placeElement = createCard({ name: titleInput.value, link: linkInput.value });
  
    photos.prepend(placeElement);
    closePopup(popupAddImage);
    formElementAdd.reset();
  }
  
  function createCard(item) {
    const card = new Card(item, "#place-card", openPicture);
    const cardElement = card.generateCard();
  
    return cardElement;
  }
  
  function renderList() {
    initialCards.forEach((item) => {
      const cardElement = createCard(item);
  
      document.querySelector(".photos").append(cardElement);
    });
  }
  
  renderList();
  
  
  formElementAdd.addEventListener("submit", handleFormSubmitPopupAdd);
  
  openButton.addEventListener("click", handleEditProfileClick);
  buttonAddImage.addEventListener("click", () => {
    openPopup(popupAddImage);
});
  
buttonCloseImage.addEventListener("click", () => closePopup(popupAddImage));
  closePicBtn.addEventListener("click", () => closePopup(popupFull));
  closeButtonEdit.addEventListener("click", () => closePopup(popupEdit));
  
  popupFormEdit.addEventListener("submit", handleFormSubmitPopupEdit);
  
  
 */

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

import Api from '../components/Api.js';





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

let userId = null;

const handleCardClick = (name, link) => fullImage.open(name, link)

const editForm = document.forms.editForm;
const addForm = document.forms.addForm;

const addFormValidation =  new FormValidator( validationConfig,  addForm);
addFormValidation.enableValidation();

const editFormValidation =  new FormValidator( validationConfig,  editForm);
editFormValidation.enableValidation();

const createCard = (cardData) => {
    const card = new Card({data : {...cardData, currentUserId: userId }},'.item-template', handleCardClick, {handleDelete: () => {
        popupSaveDelete.addEventListener('click', () => {
          popupDelete.renderLoading(true);
          api.deleteCard(cardData._id)
          .then(() => {
          card.deleteCard();
          popupDelete.close();
          })
          .catch(err => console.log(`При удалении карточки: ${err}`))
          .finally(() => popupDelete.renderLoading(false));
        });
      popupDelete.open()
    }},
    {handleLikeClick: _ => card.handleLikeCard()},api
  );
    
    const cardElement = card.generateCard()
    return cardElement;
}

const popupAddForm = new PopupWithForm('.popup_image', {handleFormSubmit: (data) => {
  popupAddForm.renderLoading(true);
    api.creatNewCard(data)
        .then((cardData) => {
            cardList.prependItem(createCard(cardData));
            popupAddForm.close();
        })
        .catch(err => console.log(`Ошибка добавление карточки: ${err}`))
        .finally(() => popupAddForm.renderLoading(false));
}
})

buttonAddImage.addEventListener('click', () => {
    popupAddForm.open();
    addFormValidation.setSubmitButtonState();
});

popupAddForm.setEventListeners()

const popupEditForm = new PopupWithForm('.popup_edit', {handleFormSubmit: (data) => {
  popupEditForm.renderLoading(true);
    apiUser
    .setUserInfoApi({
        name: data.name,
        about: data.job
    })
        .then((info) => {
            profileUserInfo.setUserInfo({
                name: info.name,
                job: info.about,
          })
          
          popupEditForm.close();
        })

        .catch(err => console.log(`Ошибка при обновлении информации о пользователе: ${err}`))
        .finally(() => popupEditForm.renderLoading(false));
}
});

openButton.addEventListener('click', () => {
    const currentUserInfo = profileUserInfo.getUserInfo();
    nameInput.value = currentUserInfo.name;
    jobInput.value = currentUserInfo.job;
    popupEditForm.open();
});

popupEditForm.setEventListeners()

const profileUserInfo = new UserInfo({nameSelector: 'profile__title', jobSelector: 'profile__subtitle', avatarSelector: 'profile__avatar'});

const fullImage = new PopupWithImage('.popup_full');
fullImage.setEventListeners()

const cardList = new Section({
    renderer: (data) => {
        cardList.prependItem(createCard(data));
    }
},
photos, api);

const api = new Api ({
    Url: 'https://mesto.nomoreparties.co/v1/cohort-27/cards'
  });
 
const apiUser = new Api ({
    Url: 'https://mesto.nomoreparties.co/v1/cohort-27/users/me'
});

Promise.all([api.getInitialCards(), apiUser.getUserInfoApi()])
  .then(([cards, userData]) => {
    userId = userData._id;

    profileUserInfo.setUserInfo({
      name: userData.name,
      job: userData.about
    });
    profileUserInfo.setUserAvatar({avatar: userData.avatar})
    cardList.rendererItem(cards.reverse());

  })
  .catch(err => console.log(`Ошибка загрузки данных: ${err}`))

const popupSaveDelete = document.querySelector('.popup__save_delete');
const popupDelete = new PopupWithForm('.popup_delete', {handleFormSubmit: () =>{}});

popupDelete.setEventListeners()


const openAvatar= document.querySelector('.profile__avatar');
const popupAvatar = new PopupWithForm('.popup_avatar', { handleFormSubmit: (newValues) => {
  popupAvatar.renderLoading(true);
  apiUser.handleUserAvatar(newValues)
    .then((data) => {
      console.log(data)
      profileUserInfo.setUserAvatar(data)
      
      popupAvatar.close()
    })
    .catch((err) => console.log(err))
    .finally(() => popupAvatar.renderLoading(false));
}
})

const avatarForm = document.forms.avatarForm;

const avatarFormValidation =  new FormValidator( validationConfig,  avatarForm);
avatarFormValidation.enableValidation();

openAvatar.addEventListener('click', () => {
  popupAvatar.open();
  avatarFormValidation.setSubmitButtonState();
});

popupAvatar.setEventListeners()

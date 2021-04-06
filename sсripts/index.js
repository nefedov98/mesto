// Нуууууууу вроде как все) Спасибо вам большое за вашу работу и ваши советы! Это правда было очень полезно, вы крутой!!)
const openButton = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_edit');
const closeButton = popup.querySelector('.popup__close');
const formElement = popup.querySelector(".form");
const nameInput = popup.querySelector(".form__input_name");
const jobInput = popup.querySelector(".form__input_job");
const name = document.querySelector('.profile__title');
const job = document.querySelector(".profile__subtitle");
const buttonAddImage = document.querySelector('.profile__add');
const popupAddImage = document.querySelector('.popup_image');
const buttonCloseImage = popupAddImage.querySelector('.popup__close');
const titleInput = document.querySelector(".form__input_title");
const linkInput = document.querySelector(".form__input_link");
const photos = document.querySelector('.photos__list')
const itemTemplate = document.querySelector('.item_template').content;
const formElementAdd = document.querySelector(".form_add");
function openPopup (popup) {
    popup.classList.add ('popup_active');
}

function closePopup (popup) {
    popup.classList.remove ('popup_active');
}

function handleEditProfileClick () {
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
    openPopup(popupEdit);
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
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

handleLikeIcon  
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

openButton.addEventListener('click', handleEditProfileClick);
closeButton.addEventListener('click', () => {
    closePopup(popupEdit);
})
formElement.addEventListener('submit', handleFormSubmit);


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
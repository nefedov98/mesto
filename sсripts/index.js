
const openButton = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_edit');
const closeButton = popup.querySelector('.popup__close');
const formElement = popup.querySelector(".form");
const nameInput = popup.querySelector(".form__input_name");
const jobInput = popup.querySelector(".form__input_job");
const name = document.querySelector('.profile__title');
const job = document.querySelector(".profile__subtitle");
const ButtonAddImage = document.querySelector('.profile__add');
const PopupAddImage = document.querySelector('.popup_image');
const ButtonCloseImage = PopupAddImage.querySelector('.popup__close');
const titleInput = document.querySelector(".form__input_title");
const linkInput = document.querySelector(".form__input_link");
const photos = document.querySelector('.photos__list')
const itemTemplate = document.querySelector('.item_template').content;
const saveButton = document.querySelector(".popup__save_image");
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

popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closePopup(popupEdit);
    }
})

PopupAddImage.addEventListener('click', () => {
    if (event.target === event.currentTarget) {
        closePopup(PopupAddImage);
    }
})

const srcImage = document.querySelector(".popup__full-image");
const nameImage = document.querySelector(".popup__full-caption");

function renderItem(item) {
	const htmlElement = itemTemplate.cloneNode(true);
    const text = htmlElement.querySelector('.photos__title');
    text.textContent = item.name;
    const img = htmlElement.querySelector('.photos__image');
    img.src = item.link;
    img.alt = item.name;
    htmlElement.querySelector('.photos__like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('photos__like-button_liked');
    });

    htmlElement.querySelector('.photos__delete').addEventListener('click', handleDelete);

    img.addEventListener('click', () => {
        transfer(item);
    });
    return htmlElement;
}

function transfer (item) {
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
    titleInput.value = "";
    linkInput.value = "";
    closePopup(PopupAddImage);
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


popupFull.addEventListener('click', () => {
    if (event.target === event.currentTarget) {
        closePopup(popupFull);
    }
})

openButton.addEventListener('click', handleEditProfileClick);
closeButton.addEventListener('click', () => {
    closePopup(popupEdit);
})
formElement.addEventListener('submit', handleFormSubmit);


ButtonAddImage.addEventListener('click', () => {
    openPopup(PopupAddImage);
})
ButtonCloseImage.addEventListener('click', () => {
    closePopup(PopupAddImage);
})
formElementAdd.addEventListener('submit', handleCreate);


openButtonFull.addEventListener('click', () => {
    openPopup(popupFull);
})
closeButtonFull.addEventListener('click', () => {
    closePopup(popupFull);
})
// Здравствуйте уважаемый ревью) Я заранее извиняюсь за то что вам придется читать этот ужас..
// Ситуация в том что я не успел доделать проект и улетел в академ, и почти месяц не прикасался к учебе.
// Это я к тому что знаю что код местами очень кривой, но он все работает как надо и задания пр выполнены. 
// Так как все работает не стал пытаться сделать его более красивым и чистым боясь что-то сломать
// Буду вам очень благодарен за советы как можно сделать лучше, спасибо.


const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const openButton = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');
const formElement = popup.querySelector(".form");
const nameInput = popup.querySelector(".form__input_name");
const jobInput = popup.querySelector(".form__input_job");
const name = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');
const openButtonimage = document.querySelector('.profile__add');
const popupimage = document.querySelector('.popup_image');
const closeButtonimage = popupimage.querySelector('.popup__close');
const titleInput = document.querySelector(".form__input_title");
const linkInput = document.querySelector(".form__input_link");
const photos = document.querySelector('.photos__list')
const itemTemplate = document.querySelector('.item_template').content;
const saveButton = document.querySelector(".popup__save_image");


function open (popup) {
    popup.classList.add ('popup_active');
}

function close (popup) {
    popup.classList.remove ('popup_active');
}

function openPopup () {
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
    open(popup);
}

function closePopup () {
    close(popup);
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup();
}

popup.addEventListener('click', () => {
    if (event.target === event.currentTarget) {
        closePopup();
    }
})

function openpopupimage () {
    open(popupimage);
}

function closepopupimage () {
    close(popupimage);
}

popupimage.addEventListener('click', () => {
    if (event.target === event.currentTarget) {
        closepopupimage();
    }
})

function render() {
	initialCards.forEach(renderItem);
}



const aaa = document.querySelector(".popup__full_image");
const sss = document.querySelector(".popup__full_caption");

function renderItem(item) {
	const htmlElement = itemTemplate.cloneNode(true);
    const text = htmlElement.querySelector('.photos__title');
    text.textContent = item.name;
    const img = htmlElement.querySelector('.photos__image');
    img.setAttribute('src', item.link);

    htmlElement.querySelector('.photos__like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('photos__like-button_liked');
    });
    
    htmlElement.querySelector('.photos__delete').addEventListener('click', handleDelete);

    function qwqw (item) {
        sss.textContent = text.textContent;
        aaa.setAttribute('src', img);
        aaa.src = img.src;
        openpopupfull();
    }
    img.addEventListener('click', () => {
        qwqw(item);
    });
    return htmlElement;
}


function addCard (card) {
    photos.prepend(card);
}





function handlecreate(evt) {
    evt.preventDefault();
    const item = {
        name: titleInput.value,
        link: linkInput.value
    }
    const card = renderItem(item);    
    addCard(card);
    closepopupimage();
}

















initialCards.reverse().forEach(function (item) {
    const card = renderItem(item);
    addCard(card);
})

function handleDelete (evt) {
    evt.target.closest('.photos__card').remove();
}

const popupfull = document.querySelector('.popup__full');
const openButtonfull = document.querySelector('.photos__image');

const closeButtonfull = document.querySelector('.popup__close_full');



function openpopupfull () {
    open(popupfull);
}

function closepopupfull () {
    close(popupfull);
}

popupfull.addEventListener('click', () => {
    if (event.target === event.currentTarget) {
        closepopupfull();
    }
})

openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);

openButtonimage.addEventListener('click', openpopupimage);
closeButtonimage.addEventListener('click', closepopupimage);
saveButton.addEventListener('click', handlecreate);

openButtonfull.addEventListener('click', openpopupfull);
closeButtonfull.addEventListener('click', closepopupfull);


render();
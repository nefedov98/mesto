let openButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close');
let formElement = popup.querySelector(".form");
let nameInput = popup.querySelector(".form__input_name");
let jobInput = popup.querySelector(".form__input_job");
let name = document.querySelector('.profile__title');
let job = document.querySelector('.profile__subtitle');

function openPopup () {
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
    popup.classList.add ('popup_active');
}

function closePopup () {
    popup.classList.remove ('popup_active');
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

openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);

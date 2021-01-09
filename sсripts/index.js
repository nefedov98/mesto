let openButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close');
let formElement = popup.querySelector(".form");
let nameInput = popup.querySelector(".form__input_name");
let jobInput = popup.querySelector(".form__input_job");
let name = document.querySelector('.profile__title');
let job = document.querySelector('.profile__subtitle');

function openPopup () {
    popup.classList.add ('popup_active');
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
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
// боже, знали бы вы как я голову ломал с этим js почти припадки, истерики, слезы! 
//но вроде все ок, и получилось простенько, разбил на две функции, текст берется со страницы и тд ..все ведь ок? 
openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);

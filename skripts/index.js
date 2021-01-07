let openButton = document.querySelector('.profile__edit');
let overlay = document.querySelector('.overlay')
let closeButton = overlay.querySelector('.popup__close')

function togglePopup  () {
    overlay.classList.toggle ('overlay_active')
}

openButton.addEventListener('click', togglePopup)
closeButton.addEventListener('click', togglePopup)

overlay.addEventListener('click', () => {
    if (event.target === event.currentTarget) {
        togglePopup()
    }
})






// Находим форму в DOM
let formElement = overlay.querySelector(".form")// Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = overlay.querySelector(".form__input_name")// Воспользуйтесь инструментом .querySelector()
    let jobInput = overlay.querySelector(".form__input_job")// Воспользуйтесь инструментом .querySelector()

    // Получите значение полей из свойства value
    nameInput.getAttribute('value');
    jobInput.getAttribute('value');
    // Выберите элементы, куда должны быть вставлены значения полей
    let name = document.querySelector('.profile__title')
    let job = document.querySelector('.profile__subtitle')
    // Вставьте новые значения с помощью textContent

    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    console.log(name.textContent);
    console.log(job.textContent);
    togglePopup();

}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
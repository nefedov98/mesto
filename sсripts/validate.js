// включение валидации вызовом enableValidation
// все настройки передаются при вызове

const validationConfig = {
    formUser: '.form[name="form_name"]',
    formPlace: '.form[name="form_place"]',
    button: '.popup__save',
    form :'.form'
}  

function enableValidation () {};
enableValidation (validationConfig);
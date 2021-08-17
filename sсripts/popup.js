export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape"){
            this.close(this._popupSelector)
        }
    }

    setEventListeners() {
        const close = this._popupSelector.querySelector(".popup__close");
        close.addEventListener("click", () => {
            this.close()
        });
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt)
        })
        this._popupSelector.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget)
            this.close()
        })
    }

    open() {
        this._popupSelector.classList.add ('popup_active');
        document.addEventListener('keydown', this._handleEscClose);
        
    }

    close() {
        this._popupSelector.classList.remove ('popup_active');
        document.removeEventListener('keydown', this._handleEscClose);
    
    }
}

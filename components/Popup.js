import * as data from '../utils/constants.js';

export default class Popup {
  constructor(popupSelector) {
    this._element = document.querySelector(popupSelector);
  }

  open() {
    this._element.classList.add("popup_active");
    data.transparentContainer.style.visibility = "visible";
    data.transparentContainer.style.opacity = "1";
  }

  close() {
    this._element.classList.remove("popup_active");
    data.transparentContainer.style.visibility = "hidden";
    data.transparentContainer.style.opacity = "0";
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    data.closeLocalButton.addEventListener("click", () => {
      this.close();
    });

    data.closePopupButton.addEventListener("click", () => {
      this.close();
    });

    data.closeImageButton.addEventListener("click", () => {
      this.close();
    });

    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });

    data.transparentContainer.addEventListener("click", () => {
      this.close();
    });
  }
}

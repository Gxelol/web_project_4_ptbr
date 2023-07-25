import * as data from '../utils/constants.js';
import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(cardElement) {
    super.open();

    data.imageContainer.style.visibility = "visible";
    data.imageContainer.style.opacity = "1";
    data.transparentContainer.style.visibility = "visible";
    data.transparentContainer.style.opacity = "1";

    this._element.querySelector(".image__item").src =
      cardElement.querySelector(".element__image").src;
    this._element.querySelector(".image__item").alt =
      cardElement.querySelector(".element__title").textContent;
    this._element.querySelector(".image__description").textContent =
      cardElement.querySelector(".element__title").textContent;
  }

  close() {
    super.close();

    data.imageContainer.style.visibility = "hidden";
    data.imageContainer.style.opacity = "0";
    data.transparentContainer.style.visibility = "hidden";
    data.transparentContainer.style.opacity = "0";
  }
}

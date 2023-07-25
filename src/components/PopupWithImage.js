import * as data from '../utils/constants.js';
import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(cardElement) {
    super.open();
    this._card = cardElement


    this._element.querySelector(".image__item").src =
      this._card.querySelector(".element__image").src;
    this._element.querySelector(".image__item").alt =
      this._card.querySelector(".element__title").textContent;
    this._element.querySelector(".image__description").textContent =
      this._card.querySelector(".element__title").textContent;
  }
}

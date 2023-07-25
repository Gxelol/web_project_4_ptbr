import * as data from '../utils/constants.js';
import renderCards from '../utils/utils.js';

export default class Card {
  constructor({item, cardSelector, handleCardClick}) {
    this._name = item.title;
    this._link = item.url;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("template")
      .content.querySelector(this._cardSelector)
      .cloneNode(true);

    return cardElement;
  }

  createLocal() {
    this._element = this._getTemplate();

    this._setEventListeners();

    this._element.querySelector(".element__title").textContent = this._name;
    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__image").alt = this._name;

    return this._element;
  }

  _setDelete() {
    //DELETE CARD
    this._element
      .querySelector(".element__delete")
      .addEventListener("click", () => {
        this._handleDeleteElement();
      });
  }

  _setLike() {
    //LIKE CARD
    this._element
      .querySelector(".element__like")
      .addEventListener("click", (e) => {
        e.target.classList.toggle("element__like_active");
      });
  }

  _openImage() {
    //OPEN IMAGE
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._handleCardClick();
      });
  }

  _setEventListeners() {
    this._setDelete();
    this._setLike();
    this._openImage();
  }

  _handleDeleteElement() {
    this._element.remove();
  }
}

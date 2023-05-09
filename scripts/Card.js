import * as data from "./data.js";
import renderCards from "./index.js";

export default class Card {
  constructor(item, cardSelector) {
    this._name = item.name;
    this._link = item.link;
    this._alt = item.alt;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  createLocal() {
    this._element = this._getTemplate();

    this._setEventListeners();

    this._element.querySelector(".element__title").textContent = this._name;
    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__image").alt = this._alt;

    return this._element;
  }

  _setEventListeners() {
    //LIKE CARD
    this._element
      .querySelector(".element__like")
      .addEventListener("click", (e) => {
        e.target.classList.toggle("element__like_active");
      });

    //DELETE CARD
    this._element
      .querySelector(".element__delete")
      .addEventListener("click", () => {
        this._handleDeleteElement();
      });

    //OPEN IMAGE
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._handleOpenImage();
      });
  }

  _handleOpenImage = () => {
    data.imageItem.setAttribute(
      "src",
      this._element.querySelector(".element__image").src
    );
    data.imageContainer.querySelector(".image__description").textContent =
      this._element.querySelector(".element__title").textContent;

    data.imageContainer.style.visibility = "visible";
    data.imageContainer.style.opacity = "1";
    data.transparentContainer.style.visibility = "visible";
    data.transparentContainer.style.opacity = "1";
  };

  _handleDeleteElement() {
    this._element.remove();
  }
}

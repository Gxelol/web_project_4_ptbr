import { api } from '../index.js';

export default class Card {
  constructor({item, cardSelector, handleCardClick}) {
    this._name = item.name;
    this._link = item.link;
    this._id = item._id;
    this._likes = item.likes;
    this._owner = item.owner;
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
    this._element.querySelector(".element__counter").textContent = this._likes.length;

    return this._element;
  }

  _setDelete() {
    //DELETE CARD
    this._element
      .querySelector(".element__delete")
      .addEventListener("click", () => {
        api.deleteCard(this._id).then(res => console.log(res))
        this._handleDeleteElement();
      });
  }

  _setLike() {
    //LIKE CARD
    this._element
      .querySelector(".element__like")
      .addEventListener("click", (e) => {
        if (this._element.querySelector(".element__like").classList.contains("element__like_active")) {
          api.deleteLike(this._id).then((likeArr) => {
            console.log(likeArr);
            this._element.querySelector('.element__counter').textContent = likeArr.likes.length;
            this._element.querySelector(".element__like").classList.remove("element__like_active");
          })
        }
        else {
          api.likeCard(this._id).then((likeArr) => {
            console.log(likeArr);
            this._element.querySelector('.element__counter').textContent = likeArr.likes.length;
            this._element.querySelector(".element__like").classList.add("element__like_active");
          })
        }
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

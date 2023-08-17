import Popup from "./Popup.js";
import { api } from '../index.js';
import * as data from '../utils/constants.js';
export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleSubmit}) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._formElement = this._element.querySelector('form');
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();

      if (this._formElement.classList.contains('popup__form_local')) {
        api.addNewCard(data.inputTitle.value, data.inputUrl.value).then((card) => {
          this._handleSubmit(card);
        })
      }else {
        this._handleSubmit();
      }


      this.close();
    });
  }

  close() {
    super.close();

    this._formElement.reset();
  }
}

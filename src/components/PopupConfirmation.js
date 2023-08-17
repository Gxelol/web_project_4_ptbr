import Popup from './Popup';
import { api } from '../pages/index.js';

export default class PopupConfirmation extends Popup {
  constructor({popupSelector}) {
    super(popupSelector);
    this._formElement = this._element.querySelector('form');
  }

  setEventListeners(card) {
    super.setEventListeners();

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();

      api.deleteCard(card._id).then(res => console.log(res))
      card._element.remove();

      this.close();
    });
  }
}

import Popup from './Popup';
import * as data from '../utils/constants.js';
import { api } from '..';

export default class PopupConfirmation extends Popup {
  constructor({popupSelector, handleSubmit}) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._formElement = this._element.querySelector('form');
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();

      api.editProfilePicture(data.inputUrlProfilePic.value).then((profilePic) => {
        this._handleSubmit(profilePic.avatar);
      })

      this.close();
    });
  }
}
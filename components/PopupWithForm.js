import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleSubmit}) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._formElement = this._element.querySelector('form');
    this._formValues = {};
  }

  _getInputValues() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._handleSubmit(this._getInputValues());

      this.close();
    });
  }

  close() {
    super.close();

    this._formElement.reset();
  }
}

import * as data from '../utils/constants.js';
import { api } from '../index.js';
export default class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    this._formValues = {
      name: this._name.textContent,
      about: this._about.textContent,
    };
    return this._formValues;
  }

  setUserInfo() {
    api.editProfile(data.inputName.value, data.inputAbout.value).then((profile) => {
      this._name.textContent = profile.name;
      this._about.textContent = profile.about;
    })
  }
}

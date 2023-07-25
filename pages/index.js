import Card from '../components/Card.js';
import * as data from '../utils/constants.js';
import FormValidator from "../components/FormValidator.js";
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js'

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  aboutSelector: ".profile__text",
});

function createCard(item) {
  const card = new Card({
    item: item,
    cardSelector: ".element",
    handleCardClick: () => {
      const imagePopup = new PopupWithImage('#card__template');
      imagePopup._setEventListeners();
      imagePopup.open(cardElement);
    }
  });

  const cardElement = card.createLocal();
  return cardElement;
}

const cardList = new Section({
  items: data.initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.addItem(cardElement);
  }
}, data.cardSelector);

cardList.renderItems();

const popup = new PopupWithForm({
  popupSelector: '.profile__popup',
  handleSubmit: () => {
    userInfo.setUserInfo();
  }
});

data.editButton.addEventListener("click", () => {
  popup.open();

  const profileData = userInfo.getUserInfo();
  document.querySelector(".popup__input-name").value = profileData.name;
  document.querySelector(".popup__input-about").value = profileData.about;
});

popup.setEventListeners();

const formConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active"
};

const editProfileValidation = new FormValidator(formConfig, ".popup__form_edit-profile");
editProfileValidation.enableValidation();

const ImageValidation = new FormValidator(formConfig, ".popup__form_local");
ImageValidation.enableValidation();

document.querySelector('.footer__year').textContent = new Date().getFullYear();

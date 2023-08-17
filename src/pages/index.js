import "../styles/index.css";
import * as data from "../utils/constants.js";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupConfirmation from '../components/PopupConfirmation';
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

//==============================================================================

export const api = new Api(
  "https://around.nomoreparties.co/v1/web_ptbr_05",
  "2435b682-2492-4802-b266-a6d24ed22bde"
);

//==============================================================================

api.getUserInfo().then((item) => {
  data.profileName.textContent = item.name;
  data.profileAbout.textContent = item.about;
  data.profileImage.src = item.avatar;
  data.profileImage.alt = `Foto de perfil de ${item.name}`;
});

//==============================================================================

export const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  aboutSelector: ".profile__text",
});

//==============================================================================

function createCard(item) {
  const card = new Card({
    item: item,
    cardSelector: ".element",
    handleCardClick: () => {
      const imagePopup = new PopupWithImage(".image");
      imagePopup.setEventListeners();
      imagePopup.open(cardElement);
    },
  });

  const cardElement = card.createLocal();
  return cardElement;
}

//==============================================================================

const renderInitialCards = () => {
  api.getServerCards().then((cards) => {
    const cardList = new Section(
      {
        items: cards,
        renderer: (item) => {
          api.getUserInfo().then((profile) => {

            if (profile._id !== item.owner._id) {
              const cardElement = createCard(item);
              cardElement.querySelector(".element__delete").style.display =
              "none";

              if (item.likes.some((like) => like._id === profile._id)) {
                cardElement.querySelector(".element__like").classList.add("element__like_active");
              }

              cardList.addItem(cardElement);
            }
            else {
              const cardElement = createCard(item);

              if (item.likes.some((like) => like._id === profile._id)) {
                cardElement.querySelector(".element__like").classList.add("element__like_active");
              }

              cardList.addItem(cardElement);
            }

          });
        },
      },
      data.cardSelector
    );

    cardList.renderItems();
  });
};

renderInitialCards();

//==============================================================================

const popup = new PopupWithForm({
  popupSelector: ".popup",
  handleSubmit: () => {
    userInfo.setUserInfo();
  },
});

data.editButton.addEventListener("click", () => {
  data.saveButton.textContent = 'Salvar';
  popup.open();

  const profileData = userInfo.getUserInfo();
  data.inputName.value = profileData.name;
  data.inputAbout.value = profileData.about;
});

popup.setEventListeners();

//==============================================================================

const popupConfirmation = new PopupConfirmation({
  popupSelector: ".edit-profile",
  handleSubmit: (link) => {
    document.querySelector(".profile__image").src = link;
  },
});

data.editProfileButton.addEventListener("click", () => {
  data.saveProfilePicture.textContent = 'Salvar';
  popupConfirmation.open();
});

popupConfirmation.setEventListeners();

//==============================================================================

const addCard = new PopupWithForm({
  popupSelector: ".location",
  handleSubmit: (card) => {
    const cardElement = createCard(card);
    document.querySelector(data.cardSelector).prepend(cardElement);
  },
});

data.addButton.addEventListener("click", () => {
  data.createButton.textContent = 'Criar';
  addCard.open();
});

addCard.setEventListeners();

//==============================================================================

const formConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

//==============================================================================

export const editProfileValidation = new FormValidator(
  formConfig,
  ".popup__form_edit-profile"
);
editProfileValidation.enableValidation();

//==============================================================================

export const ImageValidation = new FormValidator(formConfig, ".popup__form_local");
ImageValidation.enableValidation();

//==============================================================================

export const profileImageValidation = new FormValidator(formConfig, ".edit-profile__form");
profileImageValidation.enableValidation();

//==============================================================================

document.querySelector(".footer__year").textContent = new Date().getFullYear();

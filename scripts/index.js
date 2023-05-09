import Card from './Card.js';
import * as data from './data.js';
import FormValidator from "./FormValidator.js";
import { closeImage, openPopup, closePopup, openLocal, closeLocal } from './utils.js';

export const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    alt: "Um Rio envolto de árvores com uma montanha ao fundo",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    alt: "Uma lagoa com montanhas geladas ao fundo",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
    alt: "Paisagem de montanhas com um pôr do sol ao fundo",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
    alt: "céu estrelado com uma grande montanha pontiaguda",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
    alt: "lago que reflete uma montanha na paisagem",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
    alt: "um pequeno porto com barquinhos no lago e duas grandes montanhas cobertas em neve ao fundo",
  },
];

export default function renderCards(item) {
  const card = new Card(item, "#card__template");
  const cardElement = card.createLocal();

  data.cards.prepend(cardElement);
}

initialCards.forEach((item) => {
  renderCards(item);
});


data.saveButton.addEventListener("click", (evt) => {
  evt.preventDefault();

  saveProfile();
});

data.createButton.addEventListener("click", (evt) => {
  evt.preventDefault();

  data.local.style.visibility = "hidden";
  data.local.style.opacity = "0";
  data.transparentContainer.style.visibility = "hidden";
  data.transparentContainer.style.opacity = "0";

  renderCards({
    name: data.inputTitle.value,
    link: data.inputUrl.value,
  });
});

function saveProfile() {
  data.profileName.textContent = data.inputName.value;
  data.profileAbout.textContent = data.inputAbout.value;
  data.popup.style.visibility = "hidden";
  data.popup.style.opacity = "0";
  data.transparentContainer.style.visibility = "hidden";
  data.transparentContainer.style.opacity = "0";
}

function createCard() {
  renderCards({
    name: data.inputTitle.value,
    link: data.inputUrl.value,
  });

  data.inputTitle.value = "";
  data.inputUrl.value = "";
}

const formConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active"
};

const editProfileValidation = new FormValidator(formConfig, ".form_type_edit-profile");
editProfileValidation.enableValidation();

const ImageValidation = new FormValidator(formConfig, ".form_type_add-image");
ImageValidation.enableValidation();


data.transparentContainer.addEventListener("click", closePopup);

data.transparentContainer.addEventListener("click", closeLocal);

data.transparentContainer.addEventListener("click", closeImage);

data.editButton.addEventListener("click", openPopup);
data.closePopupButton.addEventListener("click", closePopup);

data.addButton.addEventListener("click", openLocal);
data.closeLocalButton.addEventListener("click", closeLocal);

data.closeImageButton.addEventListener("click", closeImage);

const closePopupWithEscape = (evt) => {
  if (evt.key === "Escape") {
    closePopup();
  }
}

const closeLocalWithEscape = (evt) => {
  if (evt.key === "Escape") {
    closeLocal();
  }
}

const closeImageWithEscape = (evt) => {
  if (evt.key === "Escape") {
    closeImage();
  }
}

document.addEventListener("keydown", closePopupWithEscape);

document.addEventListener("keydown", closeLocalWithEscape);

document.addEventListener("keydown", closeImageWithEscape);

document.querySelector('.footer__year').textContent = new Date().getFullYear();

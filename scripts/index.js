const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.popup__save-button');
const inputName = document.querySelector('.popup__input-name');
const inputAbout = document.querySelector('.popup__input-about');

const transparentContainer = document.querySelector('.container__semitransparent');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__text');

const cardTemplate = document.querySelector('#card__template').content;
const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
const cards = document.querySelector('.elements__table');

const local = document.querySelector('.location');
const createButton = document.querySelector('.location__create-button');
const closeLocalButton = document.querySelector('.location__close-button');

const imageContainer = document.querySelector('.image');
const closeImageButton = document.querySelector('.image__close-button');
const imageItem = document.querySelector('.image__item');
const imageDescription = document.querySelector('.image__description');

const initialCards = [
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
  }
];

initialCards.forEach(function(card, i) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = card.link;
  cardElement.querySelector('.element__title').textContent = card.name;
  cardElement.querySelector('.element__image').alt = card.alt;

  //OPEN IMAGE
  cardElement.querySelector('.element__image').addEventListener("click", function () {
    imageItem.setAttribute("src", card.link);
    imageContainer.querySelector('.image__description').textContent = card.name;

    imageContainer.style.visibility = "visible";
    imageContainer.style.opacity = "1";
    transparentContainer.style.visibility = "visible";
    transparentContainer.style.opacity = "1";
  });

  //LIKE CARD
  cardElement.querySelector(".element__like").addEventListener("click", function (e) {
    e.target.classList.toggle("element__like_active");
  });

  //DELETE CARD
  cardElement.querySelector('.element__delete').addEventListener("click", function () {
    cardElement.remove();
  });

  cards.prepend(cardElement);
})

const openLocal = () => {
  local.style.visibility = "visible";
  local.style.opacity = "1";
  transparentContainer.style.visibility = "visible";
  transparentContainer.style.opacity = "1";
}

const createLocal = ( inputTitle, inputUrl) => {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__title').textContent = inputTitle;
  cardElement.querySelector('.element__image').src = inputUrl;
  cardElement.querySelector('.element__image').alt = inputTitle;

  //LIKE CARD
  cardElement.querySelector(".element__like").addEventListener("click", function (e) {
    e.target.classList.toggle("element__like_active");
  });

  //DELETE CARD
  cardElement.querySelector('.element__delete').addEventListener("click", function deleteElement() {
    cardElement.remove();
  });

  //OPEN IMAGE
  cardElement.querySelector('.element__image').addEventListener("click", function openImage() {
    imageItem.setAttribute("src", cardElement.querySelector('.element__image').src);
    imageContainer.querySelector('.image__description').textContent = cardElement.querySelector('.element__title').textContent;

    imageContainer.style.visibility = "visible";
    imageContainer.style.opacity = "1";
    transparentContainer.style.visibility = "visible";
    transparentContainer.style.opacity = "1";
  });

  //ADD TO DOM
  cards.prepend(cardElement);

  document.querySelector(".location__input-title").value = "";
  document.querySelector(".location__input-url").value = "";

  local.style.visibility = "hidden";
  local.style.opacity = "0";
  transparentContainer.style.visibility = "hidden";
  transparentContainer.style.opacity = "0";
};

const closeLocal = () => {
  local.style.visibility = "hidden";
  local.style.opacity = "0";
  transparentContainer.style.visibility = "hidden";
  transparentContainer.style.opacity = "0";
}

const openPopup = () =>{
  popup.style.visibility = "visible";
  popup.style.opacity = "1";
  transparentContainer.style.visibility = "visible";
  transparentContainer.style.opacity = "1";

  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

const closePopup = () => {
  popup.style.visibility = "hidden";
  popup.style.opacity = "0";
  transparentContainer.style.visibility = "hidden";
  transparentContainer.style.opacity = "0";
}

createButton.addEventListener("click", function (evt) {
  evt.preventDefault();

  const inputTitle = document.querySelector('.location__input-title');
  const inputUrl = document.querySelector('.location__input-url');

  createLocal(inputTitle.value, inputUrl.value);

  inputTitle.value = "";
  inputUrl.value = "";
});

saveButton.addEventListener("click", function saveContent(event) {
  event.preventDefault();

  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popup.style.visibility = "hidden";
  popup.style.opacity = "0";
  transparentContainer.style.visibility = "hidden";
  transparentContainer.style.opacity = "0";
});

const closeImage = () => {
  imageContainer.style.visibility = "hidden";
  imageContainer.style.opacity = "0";
  transparentContainer.style.visibility = "hidden";
  transparentContainer.style.opacity = "0";
}

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__button_inactive");
  } else {
    buttonElement.classList.remove("popup__button_inactive");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__submit");

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    const fieldsetList = Array.from(formElement.querySelectorAll(".popup__set"));

    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset);
    });
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active"
});

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

transparentContainer.addEventListener("click", closePopup);

transparentContainer.addEventListener("click", closeImage);

transparentContainer.addEventListener("click", closeLocal);

addButton.addEventListener("click", openLocal);
closeLocalButton.addEventListener("click", closeLocal);

editButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);

closeImageButton.addEventListener("click", closeImage);

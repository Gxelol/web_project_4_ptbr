const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.popup__save-button');
let inputName = document.querySelector('.popup__input-name');
let inputAbout = document.querySelector('.popup__input-about');

const transparentContainer = document.querySelector('.container__semitransparent');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
let profileName = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__text');

const cardTemplate = document.querySelector('#card__template').content;
const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
const cards = document.querySelector('.element__table');

const local = document.querySelector('.location');
const createButton = document.querySelector('.location__create-button');
const closeLocalButton = document.querySelector('.location__close-button');

const imageContainer = document.querySelector('.image__container');
const closeImageButton = document.querySelector('.image__close-button');
const imageItem = document.querySelector('.image__item');
const imageDescription = document.querySelector('.image__description');

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "../images/yosemite_valley.svg",
  },
  {
    name: "Lago Louise",
    link: "../images/louise_lake.svg",
  },
  {
    name: "Montanhas Carecas",
    link: "../images/mountain.svg",
  },
  {
    name: "Latemar",
    link: "../images/latemar.svg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "../images/vanoise.svg",
  },
  {
    name: "Lago di Braies",
    link: "../images/lago_di_braies.svg",
  }
];

initialCards.forEach(function(card, i) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = card.link;
  cardElement.querySelector('.element__title').textContent = card.name;

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

function openLocal() {
  local.style.visibility = "visible";
  local.style.opacity = "1";
  transparentContainer.style.visibility = "visible";
  transparentContainer.style.opacity = "1";
}

function createLocal( inputTitle, inputUrl) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__title').textContent = inputTitle;
  cardElement.querySelector('.element__image').src = inputUrl;

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

  local.style.visibility = "hidden";
  local.style.opacity = "0";
  transparentContainer.style.visibility = "hidden";
  transparentContainer.style.opacity = "0";
};

function closeLocal() {
  local.style.visibility = "hidden";
  local.style.opacity = "0";
  transparentContainer.style.visibility = "hidden";
  transparentContainer.style.opacity = "0";
}

function openPopup() {
  popup.style.visibility = "visible";
  popup.style.opacity = "1";
  transparentContainer.style.visibility = "visible";
  transparentContainer.style.opacity = "1";

  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

function closePopup() {
  popup.style.visibility = "hidden";
  popup.style.opacity = "0";
  transparentContainer.style.visibility = "hidden";
  transparentContainer.style.opacity = "0";
}

createButton.addEventListener("click", function (evt) {
  evt.preventDefault();

  let inputTitle = document.querySelector('.location__input-title');
  let inputUrl = document.querySelector('.location__input-url');

  createLocal(inputTitle.value, inputUrl.value);

  inputTitle = "";
  inputUrl = "";
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

function closeImage() {
  imageContainer.style.visibility = "hidden";
  imageContainer.style.opacity = "0";
  transparentContainer.style.visibility = "hidden";
  transparentContainer.style.opacity = "0";
}

addButton.addEventListener("click", openLocal);
closeLocalButton.addEventListener("click", closeLocal);

editButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);

closeImageButton.addEventListener("click", closeImage);

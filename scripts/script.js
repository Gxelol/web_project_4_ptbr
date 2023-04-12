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

const element = document.querySelector('.element');
const cardTemplate = document.querySelector('#card__template').content;
const cards = document.querySelector('.element__table');
let elementTitle = document.querySelector('.element__title');
let elementImage = document.querySelector('.element__image');
const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

const local = document.querySelector('.location');
const createButton = document.querySelector('.location__create-button');
const closeLocalButton = document.querySelector('.location__close-button');

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

  cardElement.querySelector(".element__like").addEventListener("click", likeElement);

  cardElement.querySelector('.element__delete').addEventListener("click", function () {
    cardElement.remove();
  });

  cards.prepend(cardElement);
})

function openLocal() {
  local.style.display = "flex";
  transparentContainer.style.display = "flex";
}

function createLocal( inputTitle, inputUrl) {
  cardElement.querySelector('.element__title').textContent = inputTitle;
  cardElement.querySelector('.element__image').src = inputUrl;

  cards.prepend(cardElement);

  local.style.display = "none";
  transparentContainer.style.display = "none";
};

function closeLocal() {
  local.style.display = "none";
  transparentContainer.style.display = "none";
}

function likeElement(e) {
  e.target.classList.toggle("element__like_active");
}

function deleteElement() {
  cardElement.remove();
}

function openPopup() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;

  popup.style.display = "flex";
  transparentContainer.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
  transparentContainer.style.display = "none";
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
  popup.style.display = "none";
  transparentContainer.style.display = "none";
});

addButton.addEventListener("click", openLocal);
closeLocalButton.addEventListener("click", closeLocal);

editButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);

cardElement.querySelector(".element__like").addEventListener("click", likeElement);

cardElement.querySelector('.element__delete').addEventListener("click", deleteElement);


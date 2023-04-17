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

function closeImage() {
  imageContainer.style.visibility = "hidden";
  imageContainer.style.opacity = "0";
  transparentContainer.style.visibility = "hidden";
  transparentContainer.style.opacity = "0";
}

document.querySelector('.footer__year').textContent = new Date().getFullYear();

addButton.addEventListener("click", openLocal);
closeLocalButton.addEventListener("click", closeLocal);

editButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);

closeImageButton.addEventListener("click", closeImage);

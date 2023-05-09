export const popup = document.querySelector(".popup");
export const closePopupButton = document.querySelector(".popup__close-button");
export const saveButton = document.querySelector(".popup__save-button");
export const inputName = document.querySelector(".popup__input-name");
export const inputAbout = document.querySelector(".popup__input-about");

export const transparentContainer = document.querySelector(
  ".container__semitransparent"
);

export const editButton = document.querySelector(".profile__edit-button");
export const addButton = document.querySelector(".profile__add-button");
export const profileName = document.querySelector(".profile__title");
export const profileAbout = document.querySelector(".profile__text");

export const cardTemplate = document.querySelector("#card__template").content;
export const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
export const cards = document.querySelector(".elements__table");

export const local = document.querySelector(".location");
export const createButton = document.querySelector(".location__create-button");
export const closeLocalButton = document.querySelector(".location__close-button");

export const imageContainer = document.querySelector(".image");
export const closeImageButton = document.querySelector(".image__close-button");
export const imageItem = document.querySelector(".image__item");
export const imageDescription = document.querySelector(".image__description");
export const inputTitle = document.querySelector(".location__input-title");
export const inputUrl = document.querySelector(".location__input-url");


export const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    alt: "Um Rio envolto de árvores com uma montanha ao fundo",
    id: 1,
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    alt: "Uma lagoa com montanhas geladas ao fundo",
    id: 2,
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
    alt: "Paisagem de montanhas com um pôr do sol ao fundo",
    id: 3,
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
    alt: "céu estrelado com uma grande montanha pontiaguda",
    id: 4,
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
    alt: "lago que reflete uma montanha na paisagem",
    id: 5,
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
    alt: "um pequeno porto com barquinhos no lago e duas grandes montanhas cobertas em neve ao fundo",
    id: 6,
  },
];

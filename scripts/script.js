const popup = document.querySelector('.popup');
const transparentContainer = document.querySelector('.container__semitransparent');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.popup__save-button');
const likeButton = document.querySelector('.element__like');
let profileName = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__text');
let inputName = document.querySelector('.popup__input-name');
let inputAbout = document.querySelector('.popup__input-about');

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

saveButton.addEventListener("click", function saveContent(event) {
  event.preventDefault();

  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popup.style.display = "none";
  transparentContainer.style.display = "none";
});

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);


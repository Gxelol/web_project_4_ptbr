const popup = document.querySelector('.popup');
const popupLocation = document.querySelector('.popup__location');
const image = document.querySelector('.image');
const imagePicture = document.querySelector('.image__picture');
const elementImage = document.querySelectorAll(".element__image");
const transparentContainer = document.querySelector('.container__semitransparent');
const editButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__close-button');
const closeImageButton = document.querySelector('.image__close-button');
const submitButton = document.querySelector('.popup__submit-button');
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

function closeImage() {
  image.style.display = "none";
  transparentContainer.style.display = "none";
}

function openImage() {
  // for (i = 0; i < elementImage.length; i++) {
  //   const imageUrl = elementImage[i].getAttribute("src");
  //   imagePicture.setAttribute("src", imageUrl);
  // }

  image.style.display = "flex";
  transparentContainer.style.display = "flex";
}

submitButton.addEventListener("click", function submitContent(event) {
  event.preventDefault();

  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popup.style.display = "none";
  transparentContainer.style.display = "none";
});

editButton.addEventListener("click", openPopup);

closePopupButton.addEventListener("click", closePopup);

closeImageButton.addEventListener("click", closeImage);

for (i = 0; i < elementImage.length; i++) {
  elementImage[i].addEventListener("click", openImage);
  const imageUrl = elementImage[i].getAttribute("src");
}

console.log(imagePicture);

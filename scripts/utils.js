import * as data from './data.js';

function closeImage() {
  data.imageContainer.style.visibility = "hidden";
  data.imageContainer.style.opacity = "0";
  data.transparentContainer.style.visibility = "hidden";
  data.transparentContainer.style.opacity = "0";
}

function openPopup() {
  data.popup.style.visibility = "visible";
  data.popup.style.opacity = "1";
  data.transparentContainer.style.visibility = "visible";
  data.transparentContainer.style.opacity = "1";

  data.inputName.value = data.profileName.textContent;
  data.inputAbout.value = data.profileAbout.textContent;
}

function closePopup() {
  data.popup.style.visibility = "hidden";
  data.popup.style.opacity = "0";
  data.transparentContainer.style.visibility = "hidden";
  data.transparentContainer.style.opacity = "0";
}

function openLocal() {
  data.local.style.visibility = "visible";
  data.local.style.opacity = "1";
  data.transparentContainer.style.visibility = "visible";
  data.transparentContainer.style.opacity = "1";
}

function closeLocal() {
  data.local.style.visibility = "hidden";
  data.local.style.opacity = "0";
  data.transparentContainer.style.visibility = "hidden";
  data.transparentContainer.style.opacity = "0";
}

export { closeImage, openPopup, closePopup, openLocal, closeLocal }

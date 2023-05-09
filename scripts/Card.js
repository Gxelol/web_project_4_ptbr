import * as data from './data.js';

export default class Card {
  constructor(card, cardSelector) {
    this._name = card.name;
    this._link = card.link;
    this._alt = card.alt;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  createInitialCards() {
    this._element = this._getTemplate();

    this._setEventListeners();

    this._element.querySelector(".element__title").textContent = this._name;
    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__image").alt = this._alt;

    data.cards.prepend(this._element);

    document.querySelector(".location__input-title").value = "";
    document.querySelector(".location__input-url").value = "";

    return this._element;
  }

  createLocal(inputUrl, inputTitle) {
    this._element = this._getTemplate();

    this._setEventListeners();

    this._element.querySelector(".element__title").textContent = inputTitle;
    this._element.querySelector(".element__image").src = inputUrl;
    this._element.querySelector(".element__image").alt = inputTitle;

    console.log(this._element);

    document.querySelector(".location__input-title").value = "";
    document.querySelector(".location__input-url").value = "";

    return this._element;
  }

  _setEventListeners() {
    //LIKE CARD
    this._element
      .querySelector(".element__like")
      .addEventListener("click", (e) => {
        e.target.classList.toggle("element__like_active");
      });

    //DELETE CARD
    this._element
      .querySelector(".element__delete")
      .addEventListener("click", () => {
        this._handleDeleteElement();
      });

    //OPEN IMAGE
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._handleOpenImage();
      });

    data.transparentContainer.addEventListener("click", () => {
      this._handleClosePopup();
    });

    data.transparentContainer.addEventListener("click", () => {
      this._handleCloseLocal();
    });

    data.transparentContainer.addEventListener("click", () => {
      this._handleCloseImage();
    });

    data.editButton.addEventListener("click", () => {
      this._handleOpenPopup();
    });
    data.closePopupButton.addEventListener("click", () => {
      this._handleClosePopup();
    });

    data.addButton.addEventListener("click", () => {
      this._handleOpenLocal();
    });
    data.closeLocalButton.addEventListener("click", () => {
      this._handleCloseLocal();
    });

    data.closeImageButton.addEventListener("click", () => {
      this._handleCloseImage();
    });

    data.saveButton.addEventListener("click", (evt) => {
      evt.preventDefault();

      this._handleSaveProfile();
    });

    data.createButton.addEventListener("click", (evt) => {
      evt.preventDefault();

      this._handleCreateLocal();
    });
  }

  _handleOpenPopup() {
    data.popup.style.visibility = "visible";
    data.popup.style.opacity = "1";
    data.transparentContainer.style.visibility = "visible";
    data.transparentContainer.style.opacity = "1";

    data.inputName.value = data.profileName.textContent;
    data.inputAbout.value = data.profileAbout.textContent;
  }

  _handleClosePopup() {
    data.popup.style.visibility = "hidden";
    data.popup.style.opacity = "0";
    data.transparentContainer.style.visibility = "hidden";
    data.transparentContainer.style.opacity = "0";
  }

  _handleOpenLocal() {
    data.local.style.visibility = "visible";
    data.local.style.opacity = "1";
    data.transparentContainer.style.visibility = "visible";
    data.transparentContainer.style.opacity = "1";
  }

  _handleCloseLocal() {
    data.local.style.visibility = "hidden";
    data.local.style.opacity = "0";
    data.transparentContainer.style.visibility = "hidden";
    data.transparentContainer.style.opacity = "0";
  }

  _handleOpenImage = () => {
    data.imageItem.setAttribute(
      "src",
      this._element.querySelector(".element__image").src
    );
    data.imageContainer.querySelector(".image__description").textContent =
      this._element.querySelector(".element__title").textContent;

    data.imageContainer.style.visibility = "visible";
    data.imageContainer.style.opacity = "1";
    data.transparentContainer.style.visibility = "visible";
    data.transparentContainer.style.opacity = "1";
  };

  _handleCloseImage() {
    data.imageContainer.style.visibility = "hidden";
    data.imageContainer.style.opacity = "0";
    data.transparentContainer.style.visibility = "hidden";
    data.transparentContainer.style.opacity = "0";
  }

  _handleCreateLocal() {
    data.local.style.visibility = "hidden";
    data.local.style.opacity = "0";
    data.transparentContainer.style.visibility = "hidden";
    data.transparentContainer.style.opacity = "0";

    this.createLocal(data.inputTitle.value, data.inputUrl.value);

    data.inputTitle.value = "";
    data.inputUrl.value = "";
  }

  _handleSaveProfile() {
    data.profileName.textContent = data.inputName.value;
    data.profileAbout.textContent = data.inputAbout.value;
    data.popup.style.visibility = "hidden";
    data.popup.style.opacity = "0";
    data.transparentContainer.style.visibility = "hidden";
    data.transparentContainer.style.opacity = "0";
  }

  _handleDeleteElement() {
    this._element.remove();
  }
}


// initialCards.forEach((card, i) => {
//   const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
//   cardElement.querySelector('.element__image').src = card.link;
//   cardElement.querySelector('.element__title').textContent = card.name;
//   cardElement.querySelector('.element__image').alt = card.alt;

//   //OPEN IMAGE
//   cardElement.querySelector('.element__image').addEventListener("click", function () {
//     imageItem.setAttribute("src", card.link);
//     imageContainer.querySelector('.image__description').textContent = card.name;

//     imageContainer.style.visibility = "visible";
//     imageContainer.style.opacity = "1";
//     transparentContainer.style.visibility = "visible";
//     transparentContainer.style.opacity = "1";
//   });

//   //LIKE CARD
//   cardElement.querySelector(".element__like").addEventListener("click", function (e) {
//     e.target.classList.toggle("element__like_active");
//   });

//   //DELETE CARD
//   cardElement.querySelector('.element__delete').addEventListener("click", function () {
//     cardElement.remove();
//   });

//   cards.prepend(cardElement);
// })

// const openLocal = () => {
//   local.style.visibility = "visible";
//   local.style.opacity = "1";
//   transparentContainer.style.visibility = "visible";
//   transparentContainer.style.opacity = "1";
// }

// const createLocal = ( inputTitle, inputUrl) => {
//   const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
//   cardElement.querySelector('.element__title').textContent = inputTitle;
//   cardElement.querySelector('.element__image').src = inputUrl;
//   cardElement.querySelector('.element__image').alt = inputTitle;

//   //LIKE CARD
//   cardElement.querySelector(".element__like").addEventListener("click", function (e) {
//     e.target.classList.toggle("element__like_active");
//   });

//   //DELETE CARD
//   cardElement.querySelector('.element__delete').addEventListener("click", function deleteElement() {
//     cardElement.remove();
//   });

//   //OPEN IMAGE
//   cardElement.querySelector('.element__image').addEventListener("click", function openImage() {
//     imageItem.setAttribute("src", cardElement.querySelector('.element__image').src);
//     imageContainer.querySelector('.image__description').textContent = cardElement.querySelector('.element__title').textContent;

//     imageContainer.style.visibility = "visible";
//     imageContainer.style.opacity = "1";
//     transparentContainer.style.visibility = "visible";
//     transparentContainer.style.opacity = "1";
//   });

//   //ADD TO DOM
//   cards.prepend(cardElement);

//   document.querySelector(".location__input-title").value = "";
//   document.querySelector(".location__input-url").value = "";

//   local.style.visibility = "hidden";
//   local.style.opacity = "0";
//   transparentContainer.style.visibility = "hidden";
//   transparentContainer.style.opacity = "0";
// };

// const closeLocal = () => {
//   local.style.visibility = "hidden";
//   local.style.opacity = "0";
//   transparentContainer.style.visibility = "hidden";
//   transparentContainer.style.opacity = "0";
// }

// const openPopup = () =>{
//   popup.style.visibility = "visible";
//   popup.style.opacity = "1";
//   transparentContainer.style.visibility = "visible";
//   transparentContainer.style.opacity = "1";

//   inputName.value = profileName.textContent;
//   inputAbout.value = profileAbout.textContent;
// }

// const closePopup = () => {
//   popup.style.visibility = "hidden";
//   popup.style.opacity = "0";
//   transparentContainer.style.visibility = "hidden";
//   transparentContainer.style.opacity = "0";
// }

// createButton.addEventListener("click", function (evt) {
//   evt.preventDefault();

//   const inputTitle = document.querySelector('.location__input-title');
//   const inputUrl = document.querySelector('.location__input-url');

//   createLocal(inputTitle.value, inputUrl.value);

//   inputTitle.value = "";
//   inputUrl.value = "";
// });

// saveButton.addEventListener("click", function saveContent(event) {
//   event.preventDefault();

//   profileName.textContent = inputName.value;
//   profileAbout.textContent = inputAbout.value;
//   popup.style.visibility = "hidden";
//   popup.style.opacity = "0";
//   transparentContainer.style.visibility = "hidden";
//   transparentContainer.style.opacity = "0";
// });

// const closeImage = () => {
//   imageContainer.style.visibility = "hidden";
//   imageContainer.style.opacity = "0";
//   transparentContainer.style.visibility = "hidden";
//   transparentContainer.style.opacity = "0";
// }

// const closePopupWithEscape = (evt) => {
//   if (evt.key === "Escape") {
//     closePopup();
//   }
// }

// const closeLocalWithEscape = (evt) => {
//   if (evt.key === "Escape") {
//     closeLocal();
//   }
// }

// const closeImageWithEscape = (evt) => {
//   if (evt.key === "Escape") {
//     closeImage();
//   }
// }

// document.addEventListener("keydown", closePopupWithEscape);

// document.addEventListener("keydown", closeLocalWithEscape);

// document.addEventListener("keydown", closeImageWithEscape);

// document.querySelector('.footer__year').textContent = new Date().getFullYear();

// transparentContainer.addEventListener("click", closePopup);

// transparentContainer.addEventListener("click", closeImage);

// transparentContainer.addEventListener("click", closeLocal);

// addButton.addEventListener("click", openLocal);
// closeLocalButton.addEventListener("click", closeLocal);

// editButton.addEventListener("click", openPopup);
// closePopupButton.addEventListener("click", closePopup);

// closeImageButton.addEventListener("click", closeImage);

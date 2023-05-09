import Card from './Card.js';
import * as data from './data.js';

const renderCards = () => {
  data.initialCards.forEach((item) => {
    const card = new Card(item, "#card__template");
    const cardElement = card.createInitialCards(true);
  });
}
renderCards();

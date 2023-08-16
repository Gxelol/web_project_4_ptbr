import * as data from './constants.js'
import Card from '../components/Card.js';

export default function renderItems(item) {
  const card = new Card(item, "#card__template");
  const cardElement = card.createLocal();

  data.cards.prepend(cardElement);
}

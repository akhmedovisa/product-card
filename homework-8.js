import { productCards } from "./product-cards.js"; // задание 2

// Задание 3

const productCardTemplate = document.getElementById('product-card-template');
const productCardWrapper = document.querySelector('.product-card-wrapper');

function renderProductCards(array) {
  array.forEach(productCard => {
      const clone = productCardTemplate.content.cloneNode(true);

      const img = clone.querySelector('.product-card__images');
      img.src = `images/${productCard.image}.png`;
      img.alt = productCard.title;

      clone.querySelector('.product-card__title').textContent = productCard.title;
      clone.querySelector('.product-card__descr').textContent = productCard.description;
      clone.querySelector('.product-card__amount').textContent = `${productCard.price.toLocaleString('ru-RU')} ${productCard.currency}`;
      clone.querySelector('.product-card__for-skin').textContent = productCard.skinType;
      
      const list = clone.querySelector('.product-card__composition');
      list.innerHTML = '';
      
      productCard.composition.forEach(item => {
        list.innerHTML += `<li>${item}</li>`;
      });
      
      productCardWrapper.appendChild(clone);
  });
};

// Задание 4

const arrayOfObjects = productCards.reduce((acc, {title, description}) => {
  acc.push({[title]:description});
  return acc;
}, []);

console.log(arrayOfObjects);

// Задание 5

function getCardsQuantity() {
  let value = prompt('Сколько карточек вы хотите отобразить?');
  
  if (value === null) {
    alert('Вы отменили ввод!');
    getCardsQuantity();
  }
  if (isNaN(value)) {
    alert('Это не число!');
    return getCardsQuantity();
  }
  if (value < 1 || value > 5) {
    alert('Число должно быть от 1 до 5!');
    return getCardsQuantity();
  }
  return value;
};

function callRenderingCards() {
  const quantity = getCardsQuantity();
  const arrayToRender = productCards.slice(0, quantity);
  renderProductCards(arrayToRender);
};

window.addEventListener('DOMContentLoaded', () => {
  callRenderingCards();
});
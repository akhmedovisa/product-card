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

function getUserInputAndShowCards() {
  let quantityProductCards = prompt('Сколько карточек вы хотите отобразить на стрнице браузера?');
  const arrayToRender = productCards.slice(0, quantityProductCards);
  if (quantityProductCards === null) {
    alert('Вы отменили ввод!');
    getUserInputAndShowCards()
  }
  else if (isNaN(quantityProductCards)) {
    alert('Это не число!');
    getUserInputAndShowCards()
  }
  else if (quantityProductCards < 1 || quantityProductCards > 5) {
    alert("Число должно быть от 1 до 5 включительно!");
    getUserInputAndShowCards()
  }
  else {
    renderProductCards(arrayToRender);
  } 
};

getUserInputAndShowCards();
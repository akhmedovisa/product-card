import { productsCard } from "./array-products-card.js"; // задание 2

// Задание 3

const productCardTemplate = document.getElementById('product-card-template');
const productCardWrapper = document.querySelector('.product-card-wrapper');

function renderingOfProductCards(array, quantityProductsCard) {
  array.slice(0, quantityProductsCard).forEach(productCard => {
      const clone = productCardTemplate.content.cloneNode(true);

      const img = clone.querySelector('.product-card__images');
      img.src = `images/${productCard.image}.png`;
      img.alt = productCard.title;

      clone.querySelector('.product-card__title').textContent = productCard.title;
      clone.querySelector('.product-card__descr').textContent = productCard.description;
      clone.querySelector('.product-card__amount').textContent = productCard.amount;
      
      const list = clone.querySelector('.product-card__composition');
      list.innerHTML = '';
      
      productCard.composition.forEach(item => {
        list.innerHTML += `<li>${item}</li>`;
      });
      
      productCardWrapper.appendChild(clone);
  });
};

// Задание 4

const arrayOfObjects = productsCard.reduce((acc, {title, description}) => {
  acc.push({[title]:description});
  return acc;
}, []);

console.log(arrayOfObjects);

// Задание 5

function getUserInputAndShowCards() {
  let quantityProductsCard = prompt('Сколько карточек вы хотите отобразить на стрнице браузера?')
  if (quantityProductsCard === null) {
    alert('Вы отменили ввод!');
  }
  else if (isNaN(quantityProductsCard)) {
    alert('Это не число!');
  }
  else if (quantityProductsCard < 1 || quantityProductsCard > 5) {
    alert("Число должно быть от 1 до 5 включительно!");
  }
  else {
    renderingOfProductCards(productsCard, quantityProductsCard);
  } 
};

getUserInputAndShowCards();
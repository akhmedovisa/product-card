// Меняет цвет первой карточки

const firstCardRecolorButton = document.getElementById('first-card-recolor-button');
const firstCatalogCard = document.querySelector('.product-card');

firstCardRecolorButton.addEventListener('click', () => {
  firstCatalogCard.style.backgroundColor = '#0000ff'
})

// Меняет цвет всех карточек

const cardsRecolorButton = document.getElementById('all-card-recolor-button');
const catalogCards = document.querySelectorAll('.product-card');
const greenHashColor = '#00ff44';

cardsRecolorButton.addEventListener('click', () => {
  catalogCards.forEach (card => {
    card.style.backgroundColor = greenHashColor;
  });
})

// Переходит на сайт Google

const googleOpenButton = document.getElementById('google-open-button');
googleOpenButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google?');
  
  if (answer) {
    window.open('https://google.com');
  } else {
    console.log('Пользователь отменил переход на сайт Google')
  }
}

// Выводит контент заголовка страницы

const header = document.querySelector('.header');

header.addEventListener('mouseenter', () => {
  console.log(header.textContent)
})

// Кнопка-перекраска

const recolorButton = document.getElementById('recolor-button');

recolorButton.addEventListener('click', () => {
  recolorButton.classList.toggle('second-color-button')
})
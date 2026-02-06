// Меняет цвет первой карточки

const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
const firstCatalogCard = document.querySelector('.product-card');

recolorFirstCardButton.addEventListener('click', () => {
  firstCatalogCard.style.backgroundColor = '#0000ff'
})

// Меняет цвет всех карточек

const recolorCardsButton = document.getElementById('recolor-all-card-button');
const catalogCards = document.querySelectorAll('.product-card');
const greenHashColor = '#00ff44';

recolorCardsButton.addEventListener('click', () => {
  catalogCards.forEach (
    card => card.style.backgroundColor = greenHashColor
  )
})

// Переходит на сайт Google

const openGoogleButton = document.getElementById('open-google-button');
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google?')
  
  if (answer === true) {
    window.open('https://google.com');
  } else {
    console.log('Пользователь отменил переход на сайт Google')
  }
}

// Выводит контент заголовка страницы

const h1 = document.querySelector('.header')
h1.addEventListener('mouseover', () => {
  console.log('Выбери свой продукт')
})

// Кнопка-перекраска

const recolorButton = document.getElementById('recolor-button');
recolorButton.addEventListener('click', () => {
  recolorButton.classList.toggle('second-color-button')
})
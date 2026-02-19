// Функция, которая выводит в консоль температуру воздуха города X

const showCityTemperature = (city,degree) => (`Сейчас в ${city} температура ${degree} градусов по Цельсию`);

console.log(showCityTemperature('Москве','- 5'));

// Функция, которая проверяет заданную скорость и придаёт ей название.

const LIGHT_SPEED = 299792458;

const checkSpeed = (speed) => {
  if (speed > LIGHT_SPEED) {
    return "Сверхсветовая скорость";
  }
  if (speed < LIGHT_SPEED) {
    return "Субсветовая  скорость";
  }
  return "Скорость света";
}

console.log(checkSpeed(299792458));
console.log(checkSpeed(2997924580000));
console.log(checkSpeed(299));

// Функция проверки бюджета.

const product = 'рис';
const price = 100;

const purchaseProduct = (budget) => {
  const difference = price-budget;
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`)
  } else {
    console.log(`Вам не хвататет ${difference}₽, пополните баланс`)
  }
}

purchaseProduct(50);
purchaseProduct(175);

// Доп.задание

const checkParity = (number) => {
  if (number % 2 === 0) {
    return 'чётное'
  }
  else {
    return 'нечётное'
  }
}
console.log(checkParity(5));

let totalPopulation = 8275602508;
let totalNumberCountries = 195;
const PI = 3.14;
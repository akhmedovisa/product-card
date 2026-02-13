// Функция, которая выводит в консоль температуру воздуха города X

const cityTemperature = (city,degree) => (`Сейчас в ${city} температура ${degree} градусов по Цельсию`);

console.log(cityTemperature('Москве','- 5'))

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

console.log(checkSpeed(299792458))
console.log(checkSpeed(2997924580000))
console.log(checkSpeed(299))

// Функция-кассир

const product = 'Рис';
const price = 100;

const cashier = (budget) => {
  const difference = price-budget;
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`)
  } else {
    console.log(`Вам не хвататет ${difference}₽, пополните баланс`)
  }
}

cashier(50)
cashier(175)
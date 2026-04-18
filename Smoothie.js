import Drink from "./Drink.js";

class Smoothie extends Drink {
  constructor(name, size, price, temperature, fruits, yogurt, ice, topping) {
    super(name, size, price, temperature);

    this.fruits = fruits;
    this.yogurt = yogurt;
    this.ice = ice;
    this.topping = topping;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      "Фрукты": this.fruits,
      "Йогурт": this.yogurt,
      "Лёд": this.ice,
      "Топпинг": this.topping
    };
  }
  
  blendAllIngredients() {
    console.log(`Блендер: ВЖЖЖЖЖ!, Лёд: КРРРРР!, Фрукты: ТРРРРР!, Мотор: ВРРРРРРР...
      Все ингредиенты ${this.name} были успешно размельчены`);
  }
};

export default Smoothie;
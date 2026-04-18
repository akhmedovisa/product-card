import Drink from "./Drink.js";


class Coffee extends Drink {
  constructor(name, size, price, temperature, beans, milk, syrup, coffeeSpices) {
    super(name, size, price, temperature);
    this.beans = beans;
    this.milk = milk;
    this.syrup = syrup;
    this.coffeeSpices = coffeeSpices;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      "Вид зёрен": this.beans,
      "Молоко": this.milk,
      "Сироп": this.syrup,
      "Специи": this.coffeeSpices
    };
  }
  
  grindBeans() {
    console.log(`"Кофемолка: ЖЖЖЖЖЖ...", "Зёрна: КРРРРР!", "Мотор: ВЖЖЖЖЖЖ...", "Помол начался: ТРРР-ТРРР...",
      Зёрна ${this.beans} имеют прекрасный аромат`);
  }
};

export default Coffee;
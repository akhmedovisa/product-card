class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return {
      "Название": this.name, 
      "Размер": this.size, 
      "Цена": this.price, 
      "Температура": this.#temperature
    };
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temp) {
    this.#temperature = temp;
  }

  #prepareDrink() {
    const temp = this.#temperature;
    
    this.getInfo();
    this.getTemperature();
    this.setTemperature(temp);

    console.log('Готовим напиток!');
    console.log("ШШШШ...", "БУЛЬ-БУЛЬ...", "ПШШШ...", "ВЖЖЖЖ...", "КЛАЦ!", "ТЫК-ТЫК...", "КАП-КАП...");

  }

  serveDrink() {
    this.#prepareDrink();
    return 'Держите, ваш напиток готов!';
  }
};

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
};

class Tea extends Drink {
  constructor(name, size, price, temperature, teaType, sugar, lemon, honey) {
    super(name, size, price, temperature);

    this.teaType = teaType;
    this.sugar = sugar;
    this.lemon = lemon;
    this.honey = honey;
  }

  getInfo() {
    return {
      ...super.getInfo(),
      "Вид чая": this.teaType,
      "Сахар": this.sugar,
      "Лимон": this.lemon,
      "Мёд": this.honey
    };
  }
};

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
};

class Cafe {
  constructor(title, location) {
    this.title = title;
    this.location = location;
  }

  getInfo() {
    return {
      'Название': this.title,
      'Местоположение': this.location,
    };
  }

  orderDrink(drink) {
    console.log(`${drink.name} заказан`)
    return drink.serveDrink();
  }
};

const coffee = new Coffee('latte', 0.5, 350, 85, 'arabica', 'mindale', 'caramel', 'корица');
const lemonade = new Drink('lemonade', 0.5, 300, 10);
const cafe = new Cafe('Мысли', "Ленина 10");

console.log(cafe.getInfo());
console.log(cafe.orderDrink(lemonade)); console.log(cafe.orderDrink(coffee));
console.log(lemonade.getInfo());
class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    
    if (new.target === Drink) {
      throw new Error("Drink нельзя создавать напрямую");
    }
    
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
    console.log('Держите, ваш напиток готов!');
  }
};

export default Drink;
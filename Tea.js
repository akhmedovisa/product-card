import Drink from "./Drink.js";

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
  
  cutLemonPieces() {
    console.log(`Нож: ШШШХ!, Лимон: СКРРР!, Доска: ТУК-ТУК!, РЕЗ! РЕЗ! РЕЗ!
      Из ${this.lemon} лимона-ов мы получили ${this.lemon*20} кусочков`);
  }
};

export default Tea;
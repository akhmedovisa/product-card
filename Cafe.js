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
    console.log(`${drink.name} заказан`);
    return drink.serveDrink();
  }
};

export default Cafe;
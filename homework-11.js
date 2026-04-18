import Drink from "./Drink.js";
import Smoothie from "./Smoothie.js";
import Tea from "./Tea.js";
import Cafe from "./Cafe.js";
import Coffee from "./Coffee.js";

const cafe = new Cafe('Мысли', 'Ленина');
const americano = new Coffee('americano', 0.4, 300, 90, 'arabica', 'no', 'no', 'shugar');
const blackTea = new Tea('black-tea', 0.2, 100, 100, 'black', 'no', '2', '100ml');
const fruitSmoothie = new Smoothie('fruitSmoothie', 0.5, 400, -15, 'banana, strawberry', 'default', '200ml', 'chockolate');

console.log(cafe.getInfo());
cafe.orderDrink(americano);
console.log(americano.getInfo());
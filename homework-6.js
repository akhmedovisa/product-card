// Задание-3, создать объект, который будет хранить в себе персональные данные

const myInfo = {
  firstName: "Иса",
  lastName: "Ахмедов",
  email: "akhmedovisa167@gmail.com",
  employmentStatus: "student",
  hobby: "basketball",
  age: 18,
  country: "Russia",
  city: "Nizhnevartovsk",
  maritalStatus: "single"
};

// Задание-4 , создать объект, который будет хранить данные об автомобиле (владелецем будет объект с задания-3)

const carInformation = {
  make: "Toyota",
  model: "Camry",
  year: "2018",
  licensePlate: "ABC-123",
  color: "black",
};

carInformation.carOwner = myInfo;

// Задание-5, создать функцию, для проверки наличия свойства "максимальная скорость" в объекте: "carInformation", если сво-ва нет, то задать его.

const checkMaxSpeedInObject = ({maxSpeed}) => {
  if (carInformation.maxSpeed) {
    return
  } else {
    carInformation.maxSpeed = 200
  }
};

checkMaxSpeedInObject(carInformation);
console.log(carInformation);

// Задание-6, написать функцию, первый аргумент которой будет- объект, а второй - его свойство, которое нужно вывести, однако вывести нужно само значение.

const getValueObjectProperty = (object, property) => {
  console.log(object[property]);
};

getValueObjectProperty(carInformation, "make")

// Задание-7 создать массив, содержащий название продуктов

const products = ['рис', 'мука', 'яйца', 'шоколад', 'молоко'];

// Задание-8, создать массив, в него запихнуть объекты, внутри которых будут характеристики книг (название, дата издания и т.д)

const books = [
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    publicationYear: 1869,
    coverColor: "Blue",
    genre: "Historical Fiction"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publicationYear: 1813,
    coverColor: "Green",
    genre: "Romance"
  },
  {
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949,
    coverColor: "Red",
    genre: "Dystopian Fiction"
  }
];

const gatsbyBook = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publicationYear: 1925,
  coverColor: "Yellow",
  genre: "Classic Fiction"
};

books.push(gatsbyBook);

console.log(books);

// Задание-9, создать еще один массив с книгами, но относящимися к другой тематике (Гари Поттер) и соединить два массива в один.

const garryPotterBooks = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    publicationYear: 1997,
    coverColor: "Red",
    genre: "Fantasy"
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    publicationYear: 1998,
    coverColor: "Green",
    genre: "Fantasy"
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    publicationYear: 1999,
    coverColor: "Blue",
    genre: "Fantasy"
  }
];

const allBooks = [...books, ...garryPotterBooks];
console.log(allBooks);

// Задание-10, узнать про метод массива - map, написать с его помощью функцию (для наглядности буду считать редкими те книги, у которых год выпуска < 1950)

const checkRare = allBooks.map(function (book, i) {
  if (book.publicationYear < 1950) {
    allBooks[i].isRare = 'true';
    return 'true';
  } else {
    allBooks[i].isRare = 'false';
    return 'false';
  }
});

console.log(allBooks);
console.log(checkRare);
// Задание 3

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  
  logBookRead() {
    console.log(`Книга ${this.title} от ${this.author} была прочитана`);
  }
};

class Film extends Book {
  constructor(title, director, runtime) {
   super(title);
   this.runtime = runtime;
   this.director = director;
  }
  
  logMovieWatched() {
    console.log(`Фильм ${this.title} от ${this.director} был просмотрен за ${this.runtime}`);
  }
};

const crimeAndPunishment = new Book("Преступление и наказание", "Фёдор Достоевский");
crimeAndPunishment.logBookRead();

const interstellar = new Film("Интерстеллар", "Кристофер Нолан", "169 минут");
interstellar.logMovieWatched();
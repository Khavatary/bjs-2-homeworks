class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.condition = 100;
    this.type = null;
  }


  fix() {
    this.state *= 1.5;
  }

  set state(a) {
    if (a < 0) {
      this.condition = 0
    } else if (a > 100) {
      this.condition = 100
    } else this.condition = a;
  }

  get state() {
    return this.condition;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
    this.author = author;
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
    this.author = author;
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
    this.author = author;
  }
}

/* Второе задание */

class Library extends PrintEditionItem {
  constructor(name) {
    super(name);
    this.books = [];
  };

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  };

  findBookBy(type, value) {
    let result = this.books.find(book => book[type] === value);
    if (result) {
      return result
    } else return null
  }

  giveBookByName(bookName) {
    let getFind = this.books.findIndex(book => bookName === book.name);
    let findBook = this.books[getFind];
    if (getFind === -1) {
      return null;
    }
    this.books.splice(getFind, 1);
    return findBook;
  }
}

/* Задание 3 */

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {}
  }

  addMark(mark, discipline) {
    if (discipline in this.marks != true) {
      this.marks[discipline] = [];
    }
    if ((mark > 0) && (mark < 6)) {
      this.marks[discipline].push(mark);
    } else {
      return console.log(`Ошибка, оценка должна быть числом от 1 до 5`);
    }
  }

  exclude() {
    delete this.marks;
    console.log(`Исключен за попытку подделать оценки`);
  }

  getAverageBySubject (discipline) {
    let sum = 0;
    this.marks[discipline].forEach((i) => sum += i);
    return sum / this.marks[discipline].length;
  }

  getAverage () {
    let sum = 0;
    let count = 0;
    let tempMarks = Object.values(this.marks);
    for (let i = 0; i < tempMarks.length; i++) {
      tempMarks[i].forEach((num) => sum += num);
      count += tempMarks[i].length;
    } return sum / count;
  }
}

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
    console.log(this.books);
    console.log(bookName);
    let getFind = this.books.findIndex(book => bookName === book.name);
    console.log(this.books[getFind].name);
    let findBook = this.books[getFind].name;
    if (getFind === -1) {
      return null;
    }
    this.books.splice(getFind, 1);
      console.log(this.books);
      console.log(findBook);
      return findBook;
  }
}


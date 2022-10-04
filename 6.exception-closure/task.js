  function parseCount(number) {
    if (!isNaN(Number.parseInt(number))) {
      return Number.parseInt(number)
    } else throw new Error(`Невалидное значение`);;
  }

  function validateCount(number) {
    try {
      if (parseCount(number)) {
        return parseCount(number);
      }
    } catch (err) {
      return err;
    }
  }

  /*   Задача 2 */

  class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      this.bool = ((this.a < this.b + this.c) && (this.b < this.a + this.c) && (this.c < this.a + this.b));
      if (this.bool) {} else throw `Треугольник с такими сторонами не существует`;
    }

    getPerimeter() {
      return (this.a + this.b + this.c);
    }

    getArea() {
      let p = ((1 / 2) * (this.a + this.b + this.c));
      return (Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
    }
  }

  function getTriangle(a, b, c) {
    let newTemp = new Triangle(a, b, c);
    try {
      if ((a < b + c) && (b < a + c) && (c < a + b)) {
        return newTemp;
      }
    } catch (err) {
      return newTemp.getArea = function () {
        return 'Ошибка! Треугольник не существует';
      }, newTemp.getPerimeter = function () {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }

  /* function getTriangle(a, b, c) {
    let newTemp = new Triangle(a, b, c);
    newTemp.getArea = function () {
        return 'Ошибка! Треугольник не существует';
      },
      newTemp.getPerimeter = function () {
        return 'Ошибка! Треугольник не существует'
      };
    if ((a < b + c) && (b < a + c) && (c < a + b)) {
      return newTemp;
    } else throw newTemp.getArea(), newTemp.getPerimeter();
  } */

  let triangle = new Triangle(2, 5, 5)
  triangle.getPerimeter();
  triangle.getArea();

  console.log(triangle.getPerimeter());
  console.log(triangle.getArea());

  getTriangle(6, 10, 15)
  console.log(getTriangle(6, 10, 15));
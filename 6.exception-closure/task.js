  function parseCount(number) {
    let parseNumber = Number.parseInt(number);
    if (!isNaN(parseNumber)) {
      return parseNumber;
    }
    throw new Error(`Невалидное значение`);
  }

  function validateCount(number) {
    try {
      return parseCount(number);
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

      if (((a < b + c) && (b < a + c) && (c < a + b)) === false) {
        throw new Error(`Треугольник с такими сторонами не существует`);
      }
    }

    getPerimeter() {
      return (this.a + this.b + this.c);
    }

    getArea() {
      let p = ((this.getPerimeter()) / 2);
      return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
    }
  }

  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (err) {
      return {
        getPerimeter() {
          return `Ошибка! Треугольник не существует`
        },
        getArea() {
          return `Ошибка! Треугольник не существует`
        }
      }
    }
  }
"use strict";

function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  let arr = [];
  if (d === 0) {
    let rootOne = -b / (2 * a);
    arr.push(rootOne);
  } else if (d > 0) {
    let rootOne = (-b + Math.sqrt(d)) / (2 * a);
    let rootTwo = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(rootOne, rootTwo);
  }
  return arr; // array
}




function calculateTotalMortgage(percent, contribution, amount, date) {
  let checkPercent = Number(percent) / 100 / 12;
  let checkContribution = Number(contribution);
  let checkAmount = Number(amount);
  let totalAmount;
  if (isNaN(checkPercent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(checkContribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(checkAmount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  let bodyCredit = checkAmount - checkContribution;
  let carrentDate = new Date();
  let creditTern = date.getMonth() - carrentDate.getMonth() + (12 * (date.getFullYear() - carrentDate.getFullYear()));
  let monthlyFee = bodyCredit * (checkPercent + (checkPercent / (((1 + checkPercent) ** creditTern) - 1)));
  totalAmount = (creditTern * monthlyFee).toFixed(2);
  return Number(totalAmount);
}
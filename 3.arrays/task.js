function compareArrays(arr1, arr2) { 
  return arr1.length === arr2.length && arr1.every((number, i) => number === arr2[i]);
}

/* function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(number => number > 0);
  resultArr = resultArr.filter(number => number % 3 == 0);
  return resultArr.map( number => number * 10);
} */

function advancedFilter(arr) {
  return (arr.filter(number => number > 0 && number % 3 == 0)).map( number => number * 10);
}
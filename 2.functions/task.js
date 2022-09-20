// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  (function () {
    if (arr.length === 0) {
      return {
        min: 0,
        max: 0,
        avg: 0
      };
    }
  }());

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    } else if (arr[i] < min) {
      min = arr[i]
    }
    sum += arr[i];
  }
  let avg = Number(((sum / arr.length).toFixed(2)))
  return {
    min: min,
    max: max,
    avg: avg
  };
}



// Задание 2
function worker(arr) {
  let sum = 0;
  for (t = 0; t < arr.length; t++) {
    sum += arr[t]
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let temp;
  for (i = 0; i < arrOfArr.length; i++) {
    temp = func(arrOfArr[i])
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let diff;
  let min = arr[0];
  let max = arr[0];
  for (x = 0; x < arr.length; x++) {
    if (arr[x] > max) {
      max =arr[x]
    } else if (arr[x] < min) {
      min = arr[x]
    }
  }
  diff = Math.abs(max - min);
  return diff;
}
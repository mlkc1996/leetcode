const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const half = Math.ceil((low + high) / 2);
    const num = arr[half];
    if (num === target) {
      return half;
    }
    if (num > target) {
      high = half - 1;
    } else {
      low = half + 1;
    }
  }
  return -1;
};
const arr = [
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99,
];

const target = 100;
console.log(binarySearch(arr, target));

const binarySearch2 = (arr, predicate) => {
  let low = 0;
  let high = arr.length;
  while (low < high) {
    const half = Math.ceil((low + high) / 2) - 1;
    switch (predicate(arr[half])) {
      case 0:
        return half;
      case 1:
        low = half + 1;
        break;
      case -1:
        high = half - 1;
        break;
    }
  }
  return high;
};

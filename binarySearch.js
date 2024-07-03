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
    console.log(low);
    return - 1;
};
const arr = [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
];

const target = 100;
console.log(binarySearch(arr, target));
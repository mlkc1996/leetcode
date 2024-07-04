/**
 * @param {number[]} arr1 sorted array
 * @param {number[]} arr2 sorted array
 * @returns {number[]}
*/
const mergeArray = (arr1, arr2) => {
    const rtn = [];
    let left = 0;
    let right = 0;
    while (left < arr1.length && right < arr2.length) {
        const num1 = arr1[left];
        const num2 = arr2[right];
        if (num1 < num2) {
            rtn.push(num1);
            left++;
        } else {
            rtn.push(num2);
            right++;
        }
    }

    while (left < arr1.length) {
        rtn.push(arr1[left++]);
    }

    while (right < arr2.length) {
        rtn.push(arr2[right++]);
    }

    return rtn;
};

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const half = Math.floor(arr.length / 2);
    const arr1 = mergeSort(arr.slice(0, half));
    const arr2 = mergeSort(arr.slice(half));
    return mergeArray(arr1, arr2);
};

const getRandomNumbers = (n) => {
    let rtn = [];
    while (rtn.length < Math.max(0, n)) {
        rtn.push(Math.floor(Math.random() * 100));
    }
    return rtn;
};

const arr = getRandomNumbers(100);

console.log(mergeSort(arr));
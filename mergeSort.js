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

    if (left < arr1.length) {
        rtn.push(...arr1.slice(left, arr1.length));
    }

    if (right < arr2.length) {
        rtn.push(...arr2.slice(right, arr2.length));
    }

    return rtn;
};

const mergeSort = (arr) => {
    const half = Math.floor(arr.length / 2);
    const arr1 = arr.slice(0, half);
    const arr2 = arr.slice(half);
    const rtn_1 = arr1.length <= 1 ? arr1 : mergeSort(arr1);
    const rtn_2 = arr2.length <= 1 ? arr2 : mergeSort(arr2);
    return mergeArray(rtn_1, rtn_2);
};

const getRandomNumbers = (n) => {
    let rtn = [];
    while (rtn.length < Math.max(0, n)) {
        rtn.push(Math.floor(Math.random() * 100));
    }
    return rtn;
};

const arr = getRandomNumbers(100);
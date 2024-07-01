const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        const currentValue = arr[i];
        let insertIndex = i;
        for (let j = i-1; j >= 0; j--) {
            if (arr[j] > currentValue) {
                arr[j+1] = arr[j]
                insertIndex= j;
            } else {
                break;
            }
        }
        arr[insertIndex] = currentValue;
    }
    return arr
}

const arr = [64, 34, 25, 12, 22, 11, 90, 5]
console.log(insertionSort(arr))
const selectionSort = (arr) => {
    let index = 0;
    while(index < arr.length) {
        let min_index = index;
        for (let i = index+1; i< arr.length; i++) {
            const num = arr[i];
            const min = arr[min_index];
            if (num < min) {
                min_index = i
            }
        }
        [arr[index], arr[min_index]] = [arr[min_index], arr[index]]
        index++;
    }

    return arr
}

const arr = [64, 34, 25, 12, 22, 11, 90, 5]
console.log(selectionSort(arr))
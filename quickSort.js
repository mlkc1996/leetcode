const partition = (arr, low, high) => {
    let i = low -1;
    for (let j = low; j < high; j++) {
        if (arr[j] < arr[high]) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    
    i++;
    [arr[i], arr[high]] = [arr[high], arr[i]]
    return i;
}

const quickSort = (arr, low, high) => {
    high = Math.min(arr.length -1 , high ?? arr.length - 1); 
    low = Math.max(0 , low ?? 0); 

    if (low < high) {
        const pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }

    return arr
}

const arr = [64, 34, 25, 12, 22, 11, 90, 5]
const arr1 = [3, 2, 1, 4]
console.log(quickSort(arr))

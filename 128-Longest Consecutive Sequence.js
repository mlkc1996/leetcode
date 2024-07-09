/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let count = 1;
    for(let num of set) {
        let _count = 1;

        let current = num;
        // up
        while(set.has(++current)) {
            _count++;
            set.delete(current);
        }
        // down
        current =  num;
        while(set.has(--current)) {
            _count++;
            set.delete(current);
        }

        if (_count > count) {
            count = _count;
        }

        set.delete(num);
    }

    return count;
};

const a = {
    1: "",
    2:"",
    3:"",
    4:""
}

for(let key in a) {
    delete a[+key];
    delete a[+key + 2];
    console.log("hihi")
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const rtn = [];
    let left = 0;
    const map = new Map();
    while (left < nums.length) {
        let m = 1;
        if (map.has(nums[left])) {
            m = map.get(nums[left]);
            left++;
            continue;
        }
        for (let index = 0; index < nums.length; index++) {
            if (index === left) {
                continue;
            }
            m *= nums[index];
        }
        map.set(nums[left], m);
        map.set(nums[left] * -1, m * -1);
        rtn.push(m);
        left++;
    }

    return rtn;
};

productExceptSelf([1, 2, 3, 4]);
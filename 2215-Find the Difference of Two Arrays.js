/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const rtn = [[], []];
    const [arr1, arr2] = rtn;
    for (let num of set1) {
        if (set2.has(num)) {
            continue;
        }
        arr1.push(num);
    }
    for (let num of set2) {
        if (set1.has(num)) {
            continue;
        }
        arr2.push(num);
    }
    return rtn;
};
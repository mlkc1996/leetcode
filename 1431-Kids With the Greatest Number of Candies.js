/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const greatest = candies.reduce((max, num) => Math.max(max, num), 0);
    return candies.map((num) => num + extraCandies >= greatest);
};
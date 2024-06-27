/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let empty_space = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        const flower = flowerbed[i];
        if (flower) {
            continue;
        }

        const left = i - 1;
        if (left >= 0 && flowerbed[left]) {
            continue;
        }

        const right = i + 1;
        if (right < flowerbed.length && flowerbed[right]) {
            continue;
        }

        flowerbed[i] = 1;

        empty_space++;
    }

    return empty_space >= n;
};
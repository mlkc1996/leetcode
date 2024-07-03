/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = (right - left) * Math.min(height[left], height[right]);
    for (let i = left; i < height.length; i++) {
        if (i === left) {
            continue;
        }
        if (i === right) {
            continue;
        }
        let area = Math.min(height[left], height[i]) * Math.abs(left - i);

        if (area > maxArea) {
            maxArea = area;
            right = i;
            continue;
        }

        area = Math.min(height[i], height[right]) * Math.abs(i - right);
        if (area > maxArea) {
            maxArea = area;
            left = i;
        }

    }
    return maxArea;
}; 
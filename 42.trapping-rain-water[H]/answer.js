/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0;
    // let temp = 0;
    // let l = 0;
    // let r = 0;
    // for (let i = 0; i < height.length; i++) {
    //     l = Math.max(...height.slice(0, i));
    //     r = Math.max(...height.slice(i))
    //     temp = Math.min(
    //         l, r
    //     ) - height[i];
    //     if (temp > 0) result += temp;
    // }
    let n = height.length;
    let l_max = [], r_max = [];
    l_max[0] = height[0];
    r_max[n - 1] = height[n - 1]
    for (let i = 1; i < n; i++) {
        l_max[i] = Math.max(height[i], l_max[i - 1]);
    }
    for (let i = n - 2; i >= 0; i--) {
        r_max[i] = Math.max(height[i], r_max[i + 1]);
    }
    for (let i = 0; i < n - 1; i++) {
        result += Math.min(l_max[i], r_max[i]) - height[i]
    }
    return result
};
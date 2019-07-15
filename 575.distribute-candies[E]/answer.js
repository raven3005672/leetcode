/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    let res = new Set();
    for (let i = 0; i < candies.length; i++) {
        res.add(candies[i]);
    }
    let size = res.size;
    return size >= (candies.length / 2) ? (candies.length / 2) : size;
};
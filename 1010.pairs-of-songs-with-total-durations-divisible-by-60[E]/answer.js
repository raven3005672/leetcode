/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let res = null
    let arr = []
    let list = time.map((v) => v % 60)
    for (let i = 0; i < 60; i++) {
        arr[i] = 0
    }
    for (let i = 0; i < list.length; i++) {
        arr[list[i]] += 1
    }
    res += (arr[0] * (arr[0] - 1)) / 2
    res += (arr[30] * (arr[30] - 1)) / 2
    for (let i = 1; i < 30; i++) {
        res += arr[i] * arr[60 - i]
    }
    return res
};
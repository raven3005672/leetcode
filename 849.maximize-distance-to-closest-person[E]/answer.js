/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    let len = seats.length;
    let result = 0;
    let task = i => {
        let j = 1
        while (seats[i - j] !== 1 && seats[i + j] !== 1) {
            j++
        }
        result = Math.max(result, j);
    };
    for (let i = 0; i <= len; i++) {
        if (seats[i] === 0) task(i)
    }
    return result;
};
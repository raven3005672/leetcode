/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (!intervals.length) return [];
    let result = [];
    intervals.sort((a,b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length; i++) {
        if (result.length == 0) {
            result.push(intervals[i]);
        } else {
            if (result[result.length - 1][1] < intervals[i][0]) {
                result.push(intervals[i]);
            } else {
                result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1])
            }
        }
    }
    return result;
};

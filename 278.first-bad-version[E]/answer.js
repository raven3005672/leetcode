/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        const check = (start, end) => {
            if (end - start == 0) {return start};
            let c = Math.floor(start / 2 + end / 2);
            if (isBadVersion(c)) {
                return check(start, c);
            } else {
                return check(c+1, end);
            }
        }
        return check(1, n)
    };
};
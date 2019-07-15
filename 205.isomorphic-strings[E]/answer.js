/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const handle = str => {
        let basedNum = 0;
        const map = {};
        const result = [];
        for (let char of str) {
            if (map[char] === undefined) {
                const current = ++basedNum;
                map[char] = current;
                result.push(current);
            } else {
                result.push(map[char]);
            }
        }
        return result.join('');
    }
    return handle(s) === handle(t)
};
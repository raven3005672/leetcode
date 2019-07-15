/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let short = s.length > t.length ? t : s;
    let long = s.length > t.length ? s : t;
    let map = {};
    for (let ss of short) {
        if (map[ss]) {
            map[ss]++;
        } else {
            map[ss] = 1;
        }
    }
    for (let tt of long) {
        if (map[tt]) {
            map[tt]--;
        } else {
            return tt;
        }
    }
};
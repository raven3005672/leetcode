/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    p = [0, 0];
    [...moves].forEach(move=>{
        if (move=='R') p[0]++;
        if (move=='L') p[0]--;
        if (move=='U') p[1]++;
        if (move=='D') p[1]--;
    })
    return p[0]==0&&p[1]==0
};
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
    //三枚石子初始位置x<y<z，一次移动一枚石子，且x<k<z,k!=y
    var x = Math.min(a, b, c);
    var z = Math.max(a, b, c);
    var y = a + b + c - x - z;
    var min = (z-y===1?0:1) + (y-x===1?0:1);
    if(y-x === 2 || z-y === 2){
        min = 1;
    }
    var max = (z-y-1) + (y-x-1);
    return [min, max];
};
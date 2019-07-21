/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
    //曼哈顿距离|r0-r|+|c0-c|
    var res = [];
    var count = 0;
    for(var r=0;r<R;r++){
        for(var c=0;c<C;c++){
            res[count++] = [r,c];
        }
    }
    res.sort((a,b)=>{
        var tempa = Math.abs(r0-a[0])+Math.abs(c0-a[1]);
        var tempb = Math.abs(r0-b[0])+Math.abs(c0-b[1]);
        return tempa-tempb;
    });
    return res;
};
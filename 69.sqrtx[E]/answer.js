/**
 * @param {number} x
 * @return {number}
 */
// 测试用例
var x = 7;
var mySqrt = function(x) {
    if (x <= 1) {return x}
    let r = x,
        t = Math.floor(r);
    while(r > (x / r)) {
        r = (r + (x / r)) / 2;
        t = Math.floor(r);
        if (t*t < x && (t+1)*(t+1)>x){
            return t
        }
        if (t*t == x) return t;
        if ((t+1)*(t+1) == x) return t+1;
    }
};
console.log(mySqrt(x))
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // 设置变量flag, j,j最大为i的平方根，当i能整除j则break，否则为指数，count++
    var count = 0;
    for(var i = 2; i < n; i++){
        var flag = true;
        for(var j = 1; j <= Math.sqrt(i); j++){
            if(j !== 1 && i % j === 0){
                flag = false;
                break;
            }
        }
        if(flag){
            count++;
        }
    }
    return count;
};
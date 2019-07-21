/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
    // 参考大神思路分析如下：由于对称性，只考虑target为正数，当1+2+3+...+n = sum = target,此时步数为n，
    // 由于n是每一步自增1，当 sum - target 第一次大于0，且为奇数，此时无法通过左移来使sum-target = 0，
    // 当sum-target = 2x第一次为偶数时可以通过调整x值为负来使sum-target = 0;
    target = Math.abs(target);
    var sum = 0;
    var res = 1;
    while(target > sum || (target - sum) % 2 !== 0){
        sum += res++;
    } 
    return res-1;
};

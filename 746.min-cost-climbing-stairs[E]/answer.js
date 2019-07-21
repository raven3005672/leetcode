/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    //动态规划
    var a = cost[0];
    var b = cost[1];
    var i = 2;
    while(i<cost.length){
        var temp = Math.min(a,b) + cost[i++];
        a = b;
        b = temp;
    }
    return Math.min(a,b);
};
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    var n = 1;
    var res = [];
    for(var j=0;j<num_people;j++){
        res[j] = 0;
    }
    function dfs(res, candies){
        if(candies <= 0) return;
        for(var i=0;i<res.length;i++){
            if(n <= candies){
                res[i] += n;
                candies -= n;
            }else{
                res[i] += candies;
                candies = 0;
            }
            n++;
        }
        dfs(res, candies);
    }
    dfs(res, candies);
    return res;
};
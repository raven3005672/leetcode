/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a,b)=>b-a);
    for(var i=0,j=1;i<stones.length&&j<stones.length;){
        if(stones[i] === stones[j]){
            stones.splice(0, 2);
        }else{
            stones[i] = stones[i] - stones[j];
            stones.splice(j, 1);
            stones.sort((a,b)=>b-a);
        }
    }
    return stones[0] || 0;
};
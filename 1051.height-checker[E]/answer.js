/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    var arr = [...heights];
    arr.sort((a,b)=>a-b);
    var count = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i] !== heights[i]){
            count++;
        }
    }
    return count;
};
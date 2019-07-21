/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    var len = arr.length;
    for(var i=0;i<len;i++){
        if(arr[i]===0){
            arr.splice(i, 0, 0);
            arr.splice(len, 1);
            i++;
        }
    }
};
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    var arr = text.split(' ');
    var res = [];
    for(var i=0;i<arr.length-2;i++){
        if(arr[i] === first && arr[i+1] === second){
            res.push(arr[i+2]);
        }
    }
    return res;
};
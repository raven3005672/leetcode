/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    var arr = S.split('');
    for(var i=0,j=1;i<arr.length&&j<arr.length;){
        if(arr[i] === arr[j]){
            arr.splice(i, 2);
            if(i > 0) i--;
        }else{
            i++;
        }
        j=i+1;
    }
    return arr.join('');
};
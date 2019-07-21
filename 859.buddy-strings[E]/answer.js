/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if(A.length !== B.length) return false;
    if(A.length === 1) return false;
    var arrA = A.split('');
    var count = 0;
    var arr = [];
    for(var i=0;i<A.length;i++){
        if(A[i] !== B[i]){
            count++;
            arr.push(i);
        }
    }
    if(count === 0){
        return new Set(arrA).size !== A.length
    }else if(count === 2){
        var temp = arrA[arr[0]];
        arrA[arr[0]] = arrA[arr[1]];
        arrA[arr[1]] = temp;
        return arrA.join('') === B;
    }
    return false;
};
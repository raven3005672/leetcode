/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    //也就是只有目标元素重复两次或以上
    var obj = new Map();
    for(var i=0;i<A.length;i++){
        if(obj.has(A[i])){
            return A[i];
        }else{
            obj.set(A[i], 1);
        }
    }
};
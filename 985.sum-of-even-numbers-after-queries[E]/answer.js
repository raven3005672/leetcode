/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    //先计算A中所有偶数和，再根据A[index]、val是否为偶数进行偶数和的增减计算
    //A[index]、val都为奇数、都为偶数、一奇一偶；
    var sum = 0;
    sum = A.reduce((accumulator, currentValue)=>{
        if(currentValue % 2 === 0) return accumulator + currentValue;
        return accumulator;
    }, sum);
    var val, index, arr = [];
    for(var i=0,len=queries.length;i<len;i++){
        val = queries[i][0];
        index = queries[i][1];
        if(A[index] % 2 !== 0 && val % 2 !== 0){
            A[index] += val;
            sum += A[index];
        }else if(A[index] % 2 !== 0 && val % 2 === 0){
            A[index] += val;
        }else if(A[index] % 2 === 0 && val % 2 !== 0){
            sum -= A[index];
            A[index] += val;
        }else if(A[index] % 2 === 0 && val % 2 === 0){
            A[index] += val;
            sum += val;
        }
        arr[i] = sum;
    }
    return arr;
};
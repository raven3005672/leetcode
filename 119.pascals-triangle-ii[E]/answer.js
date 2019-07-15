/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let arr = [];
    let a = 1;
    for(let i = 0 ; i <= rowIndex; i++){
        arr.push(a)
        a = a *(rowIndex - i)/(i+1)
    }
    return arr
}

// 直接使用计算公式

// 递归超时
// var getRow = function(rowIndex) {
//     let result = [];
//     let init = rowIndex;
//     if (init == 0) {
//         result = [1];
//     } else if (init == 1) {
//         result = [1, 1]
//     } else {
//         for (let i = 0; i < init + 1; i++) {
//             result[i] = getRow(rowIndex - 1)[i] + getRow(rowIndex - 1)[i - 1];
//             result[i] = result[i] ? result[i] : 1;
//         }
//     }
//     return result;
// };


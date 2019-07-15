/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num >= 10) {
        num = Math.floor(num / 10 + num % 10);
    }
    return num;
};

// 数学方法
// if(num==0){
//     return 0;
// }
// return num%9?num%9:9;
/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    //常规使用十进制对5取模会超出位数，所以利用取模结果与0进行比较。
    //当一个数不能被5整除，假设当前数0b1110，即左移一位0b11100,还是不能被5整除，与前一次取模的值是相同的，设当前为其余数1~4
    //假设当前数能被5整除，即左移一位依旧能被5整除，设当前数为0
    var res = [];
    var num = 0;
    for(var i=0;i<A.length;i++){
        num = ((num<<1) + A[i])%5;
        if(num === 0){
            res.push(true);
        }else{
            res.push(false);
        }
    }
    return res;
};
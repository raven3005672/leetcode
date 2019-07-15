/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var dic = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var str = "";
    //非26进制，对26进行取模运算
    while(n!=0){
        if(n%26 == 0){
            str = dic[25].concat(str);
            n = Math.floor(n/26)-1;
        }else{
            str = dic[n%26-1].concat(str);
            n = Math.floor(n/26);
        }
    }
    return str;
};

console.log(convertToTitle(26))
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    // 用字典会比较好
    if(words.length === 1) return true;
    for(var i=1;i<words.length;i++){
        if(!isSrc(words[i-1], words[i])){
            return false;
        }
    }
    return true;
    function isSrc(str1, str2){
        for(var j=0;j<str1.length;j++){
            if(!str1[j] && str2[j]){
                return true;
            }else if(str1[j] && !str2[j]){
                return false;
            }else{
                if(order.indexOf(str1[j]) > order.indexOf(str2[j])){
                    return false;
                }else if(order.indexOf(str1[j]) === order.indexOf(str2[j])){
                    continue;
                }else{
                    return true;
                }
            }
        }
    }
};
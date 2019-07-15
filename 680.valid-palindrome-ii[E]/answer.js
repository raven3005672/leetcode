/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    //两边向中间靠拢，若不相等则删除当前不相等字符再进行判断，有一个符合返回true，否则返回false
    if(isPalindrome(s)) return true;
    for(var i=0,j=s.length-1;i<=j;){
        if(s[i] !== s[j]){
            var str1 = s.substring(0,i)+s.substring(i+1);
            var str2 = s.substring(0,j)+s.substring(j+1);
            if(isPalindrome(str1) || isPalindrome(str2)){
                return true;
            }
            return false;
        }else{
            i++;
            j--;
        }
    }
    return true;
    function isPalindrome(str){
        return str === str.split('').reverse().join('');
    }
};
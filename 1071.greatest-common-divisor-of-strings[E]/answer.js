/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let a = str1.length
    let b = str2.length
    let res = ''
    if(a==b){
       if(str1==str2){
          return str1
        }else{
          return ''
        }
     }else if(a>b){
         res = str1.substr(b)
         return gcdOfStrings(res,str2)
         
     } else{
         res = str2.substr(a)
         return gcdOfStrings(res,str1)
     }   
};
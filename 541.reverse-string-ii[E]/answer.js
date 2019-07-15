/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var arr=s.split(''),
        res='';
    for(var i=1;arr.slice((i-1)*k,i*k).length!==0;i++){
        if(i%2===1)
            res+=arr.slice((i-1)*k,i*k).reverse().join('');
        else
            res+=arr.slice((i-1)*k,i*k).join('');
    }
    return res;
};
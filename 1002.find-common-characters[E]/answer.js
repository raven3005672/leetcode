/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    if(A.length===1) return A[0].split('');
    var res = [];
    var s = A[0];
    for(var i=0;i<s.length;i++){
        var flag = A.every((item)=>{
            return item.indexOf(s[i])>-1;
        });
        if(flag){
            A.forEach((currentValue, index)=>{
                var idx = currentValue.indexOf(s[i]);
                var arr = currentValue.split('');
                arr.splice(idx, 1);
                A[index] = arr.join('');
            });
            res.push(s[i]);
        }
    }
    return res;
};
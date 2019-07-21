/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    var res = [];
    var C = (A + ' ' + B).split(' ');
    var temp = new Map();
    for(var i=0;i<C.length;i++){
        if(temp.has(C[i])){
            temp.set(C[i], temp.get(C[i]) + 1);
        }else{
            temp.set(C[i], 1);
        }
    }
    for(var m=0;m<C.length;m++){
        if(temp.get(C[m]) === 1){
            res.push(C[m]);
        }
    }
    return res;
};
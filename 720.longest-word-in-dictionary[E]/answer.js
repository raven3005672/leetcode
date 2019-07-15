/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    var res = [];
    words.sort((a,b)=>b.length-a.length);
    for(var i=0;i<words.length;i++){
        var str = words[i];
        var flag = true;
        for(var j=str.length-1;j>0;j--){
            if(!words.includes(str.substring(0,j))) flag = false;
        }
        if(flag && (res.length === 0 || res[0].length <= str.length)) res.push(str);
    }
    res.sort();
    return res[0] || '';
};
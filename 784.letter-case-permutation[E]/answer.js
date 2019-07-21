/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    //1.for + Array.prototype.map
    let res = [S];
    for(let i = 0; i < S.length; i++) {
        if(/[a-zA-Z]/.test(S[i])) {
            let temp = res.map(s => {
                let t = s[i].charCodeAt() > 96 ? s[i].toUpperCase() : s[i].toLowerCase();
                return s.substring(0, i) + t + s.substring(i + 1, S.length);
            })
            res = res.concat(temp);
        }
    }
    return res;
    //2.回溯
    var res = [];
    function get(prefix, str){
        if(!str){
            res.push(prefix);
            return;
        }
        //var currentChar = str[0];
        //var rest = str.slice(1).split('');
        //解构赋值
        var [currentChar, ...rest] = str;
        if(/[a-zA-Z]/.test(currentChar)){
            var lowerPrefix = prefix + currentChar.toLowerCase();
            var upperPrefix = prefix + currentChar.toUpperCase();
            var resStr = rest.join('');
            get(lowerPrefix, resStr);
            get(upperPrefix, resStr);
        }else{
            prefix += currentChar;
            get(prefix, rest.join(''));
        }
    }
    get('', S);
    return res;
};
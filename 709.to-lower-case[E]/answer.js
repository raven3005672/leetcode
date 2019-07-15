/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    //字典法
    var obj = {
        'A': 'a',
		'B': 'b',
		'C': 'c',
		'D': 'd',
		'E': 'e',
		'F': 'f',
		'G': 'g',
		'H': 'h',
		'I': 'i',
		'J': 'j',
		'K': 'k',
		'L': 'l',
		'M': 'm',
		'N': 'n',
		'O': 'o',
		'P': 'p',
		'Q': 'q',
		'R': 'r',
		'S': 's',
		'T': 't',
		'U': 'u',
		'V': 'v',
		'W': 'w',
		'X': 'x',
		'Y': 'y',
		'Z': 'z',
    }
    var res = [];
    for(var i=0,len=str.length;i<len;i++){
        if(obj[str[i]]){
            res[i] = obj[str[i]];
        }else{
            res[i] = str[i];
        }
    }
    return res.join('');
    /*return str.replace(/([A-Z])/g, function(m, $1, offset){
        return $1.toLowerCase();
    })*/
};
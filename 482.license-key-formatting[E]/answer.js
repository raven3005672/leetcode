/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    let res = [];
    let arr = S.split('-');
    let i = arr.length-1;
    // 本组字符剩余几个位置
    let restNum = K;
    let resItem = '';
    while (i>=0) {
        if (arr[i].length<restNum) {
            resItem = arr[i] + resItem;
            restNum -= arr[i].length;
            i--;
        } else if (arr[i].length==restNum){
            resItem = arr[i] + resItem;
            res.push(resItem);
            i--;
            restNum = K;
            resItem = '';
        } else {
            resItem = arr[i].substring(arr[i].length-restNum) + resItem;
            arr[i] = arr[i].substring(0, arr[i].length-restNum);
            res.push(resItem);
            restNum = K;
            resItem = '';
        }
    }
    if (resItem!=''){
        res.push(resItem);
    }
    return(res.reverse().join('-').toUpperCase());
};


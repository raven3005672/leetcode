/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    var arr = S.split(' ');
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var temp = '';
    for(var i=0;i<arr.length;i++){
        temp += 'a';
        if(vowels.includes(arr[i].substring(0,1).toLowerCase())){
            arr[i] += 'ma' + temp; 
        }else{
            arr[i] = arr[i].substring(1) + arr[i].substring(0,1) + 'ma' + temp;
        }
    }
    return arr.join(' ');
};
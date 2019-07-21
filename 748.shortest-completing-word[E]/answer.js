/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    licensePlate = licensePlate.replace(/([^a-zA-Z])/g, (m, $1)=>'').toLowerCase();
    var arr = [];
    for(var i=0;i<words.length;i++){
        if(arr.length === 0){
            if(isCompleteWord(words[i], licensePlate)){
                arr[0] = words[i];
                arr[1] = words[i].length;
            }
        }else{
            if(isCompleteWord(words[i], licensePlate) && arr[1] > words[i].length){
                arr[0] = words[i];
                arr[1] = words[i].length;
            }
        }
    }
    return arr[0];
    function isCompleteWord(word, license){
        var arr = word.split('');
        for(var i=0;i<license.length;i++){
            if(arr.includes(license[i])){
                arr.splice(arr.indexOf(license[i]), 1);
            }else{
                return false;
            }
        }
        return true;
    }
};
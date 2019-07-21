/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    if(name.length>typed.length){return false}
    let i = 0
    let j = 0
    while(i<name.length){
        if(name[i]==typed[j]){
            j++
            i++
        }else if(i!=0&&name[i-1]==typed[j]){
            j++
        }else{
            return false
        }
    }
        for(;j<typed.length;j++){
            if(typed[j]!=name[i-1]){return false}
        }
    return true
};
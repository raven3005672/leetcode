/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let l = 0; // 左指针
    let r = S.length - 1; // 右指针
    const arr = [...S];
    while(l < r){
        while(!/[a-zA-Z]/.test(arr[l])){
            l++;
        }
        while(!/[a-zA-Z]/.test(arr[r])){
            r--;
        }
        if(l < r){
            [arr[l], arr[r]] = [arr[r], arr[l]]; //利用解构赋值交换值
        }
        l++;
        r--;
    }
    return arr.join('');
};
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let second = num.toString(2)
    let newArr = second.split('')
    for(let i=0;i<newArr.length;i++){
        switch (newArr[i])
        {
        case '0':
            newArr[i] = 1
            break;
        case '1':
            newArr[i] = 0
            break;
        }
    }
    return parseInt(newArr.join(''),2)
};
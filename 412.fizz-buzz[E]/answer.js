/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = Array.from({
        length: n
    }, (v, i) => {
        if ((i+1) % 3 === 0 && (i+1) % 5 === 0) {
            return 'FizzBuzz';
        }
        if ((i+1) % 5 === 0 && (i+1) % 3 !== 0) {
            return 'Buzz';
        }
        if ((i+1) % 3 === 0 && (i+1) % 5 !== 0) {
            return 'Fizz';
        }
        return i+1 + '';
    })
    return result;
};
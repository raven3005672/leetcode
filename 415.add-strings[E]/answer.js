/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let a = [...num1];
    let b = [...num2];
    let jw = 0;
    const result = [];

    while(a.length || b.length) {
        const ca = a.pop() || 0;
        const cb = b.pop() || 0;
        result.unshift((+ca + +cb + jw) % 10);

        if(+ca + +cb + jw >= 10) {
            jw = 1;
        } else {
            jw = 0;
        }
    }
    if(jw === 1) {
        result.unshift(1);
    }
    return result.join('');
};
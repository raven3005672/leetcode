/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    let stack = []
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === '+') {
            stack.push(stack.slice(-2)[0] + stack.slice(-2)[1])
        } else if (ops[i] === 'D') {
            stack.push(stack.slice(-1)[0] * 2)
        } else if (ops[i] === 'C') {
            stack.pop()
        } else {
            stack.push(parseInt(ops[i]))
        }
    }
    return stack.reduce((a, b) => a + b, 0)
};
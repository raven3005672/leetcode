/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = [];
  let i = 0;
  let j = 0;

  while (i < pushed.length) {
    stack.push(pushed[i]);
    while (stack[stack.length - 1] === popped[j] && stack.length) {
      j++;
      stack.pop();
    }
    i++
  }
  return stack.length === 0;
};

// 建立一个栈，保存pushed元素，栈顶的元素跟popped顶层元素一致弹出元素。
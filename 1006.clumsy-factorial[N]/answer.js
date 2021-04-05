/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function (N) {
  const stack = [N--];

  let index = 0; // 用于控制乘、除、加、减
  while (N > 0) {
    if (index % 4 == 0) {
      stack.push(stack.pop() * N);
    } else if (index % 4 == 1) {
      const cur = stack.pop();
      stack.push(cur > 0 ? Math.floor(cur / N) : Math.ceil(cur / N));
    } else if (index % 4 == 2) {
      stack.push(N);
    } else {
      stack.push(-N);
    }
    index++;
    N--;
  }

  // 把栈中所有的数字依次弹出求和
  let sum = 0;
  stack.forEach((element) => {
    sum += element;
  })
  return sum;
};


// 数学方法
var clumsy = function (N) {
  if (N === 1) {
    return 1;
  } else if (N === 2) {
    return 2;
  } else if (N === 3) {
    return 6;
  } else if (N === 4) {
    return 7;
  }

  if (N % 4 === 0) {
    return N + 1;
  } else if (N % 4 <= 2) {
    return N + 2;
  } else {
    return N - 1;
  }
};

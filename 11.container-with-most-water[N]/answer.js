/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let temp = 0;
    let init = 0;
    let startValue = void 0;
    while (init < height.length) {
        startValue = height[init];
        for (let i = 0; i < height.length; i++) {
            if (startValue * height[i] == 0) continue;
            temp = Math.min(startValue, height[i]) * (i - init);
            max = Math.max(max, temp);
        }
        height[init] = 0;
        init++;
    }
    return max;
};

// 这道题最粗暴的方法当然是O(n^2)，当然对于medium难度的题目来说，显然不能这么做 这道题要解决的问题是，找寻最大的一组(i,j)，使得Area最大

// Area = Max(min(height[i], height[j]) * (j-i)) {其中0 <= i < j < height,size()}
// 这里用到了动态规划，基本的表达式: area = min(height[i], height[j]) * (j - i) 使用两个指针，值小的指针向内移动，这样就减小了搜索空间 因为面积取决于指针的距离与值小的值乘积，如果值大的值向内移动，距离一定减小，而求面积的另外一个乘数一定小于等于值小的值，因此面积一定减小，而我们要求最大的面积，因此值大的指针不动，而值小的指针向内移动遍历

var maxArea = function(height) {
    let i = 0, j = height.length - 1, result = 0;
    while (i < j) {
        let h = Math.min(height[i], height[j]);
        result = Math.max(result, h * (j - i));
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return result;
}

maxArea([1,8,6,2,5,4,8,3,7])
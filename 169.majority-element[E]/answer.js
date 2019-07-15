/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let arr = nums.sort((a,b) => a-b);
    let i = 0;
    while(i < arr.length) {
        let result = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]) + 1;
        if (result > (arr.length / 2)) {
            return arr[i];
        } else {
            i = arr.lastIndexOf(arr[i]) + 1;
        }
    }
};

// map方法
var majorityElement = function(nums) {
    let map = new Map(), sum = 0, majority = 0;
    nums.forEach(d => {
        if (map.get(d)) {
            map.set(d, map.get(d) + 1);
        } else {
            map.set(d, 1);
        }
    });
    map.forEach((value, key) => {
        if (sum === 0 && majority === 0) {
            sum = value;
            majority = key;
        } else {
            if (sum < value) {
                sum = value;
                majority = key;
            }
        }
    });
    return majority;
}

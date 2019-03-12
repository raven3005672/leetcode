/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// import HashTable from '../HashTable.js';

// 测试用例
var nums = [4,1,7,11,15];
var target = 8;
// 暴力法
// var twoSum = function(nums, target) {
//     let withoutCheckIndex;
//     for (let i = 0; i < nums.length; i++) {
//         withoutCheckIndex = nums.findIndex(a => a === target - nums[i]);
//         if (withoutCheckIndex !== i && withoutCheckIndex > -1) {
//             return [i, withoutCheckIndex];
//         }
//     }
// };
// 哈希表
// 通过以空间换取速度的方式，我们可以将查找时间从 O(n) 降低到 O(1)。
// 哈希表正是为此目的而构建的，它支持以 近似 恒定的时间进行快速查找。
// 我用“近似”来描述，是因为一旦出现冲突，查找用时可能会退化到 O(n)。
// 但只要你仔细地挑选哈希函数，在哈希表中进行查找的用时应当被摊销为 O(1)。
var HashTable = require('../HashTable');
var twoSum = function(nums, target) {
    let hashTable = new HashTable(),
        sub = [];
    for (let i = 0; i < nums.length; i++) {
        hashTable.add(i, nums[i]);
    }
    for (var j = 0; j < nums.length; j++) {
        if (hashTable.containValue(target - nums[j]) && target !== 2 * nums[j]) {
            sub.push(j);
            let antherIndex = Number(hashTable.getKey(target - nums[j]));
            sub.push(antherIndex);
            break;
        }
    }
    if (sub.length !== 0) {
        return sub;
    } else {
        return -1;
    }
};

console.log(twoSum(nums, target))


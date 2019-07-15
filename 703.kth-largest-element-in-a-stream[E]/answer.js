/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k
    this.arr = []
    for (var i = 0; i < nums.length; i++) {
        this.add(nums[i])    
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    var sign = true
    if (!this.arr.length) {
        this.arr.push(val)
    } else {
        var i = 0
        while (i < this.arr.length) {
            if (val < this.arr[i]) {
                this.arr.splice(i, 0, val)
                sign = false
                break
            }
            i++
        }
        if (sign) {
            this.arr.push(val)
        }
        if (this.arr.length > this.k) {
            this.arr.shift()
        }
    }
    
    return this.arr[0]
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
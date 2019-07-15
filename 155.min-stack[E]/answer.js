/**
 * initialize your data structure here.
 */
var MinStack = function() {
    if (!this.array || Object.prototype.toString.call(this.array) !== '[object Array]') {
        this.array = [];
    }
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.array.unshift(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.array.shift();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.array[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let res = this.array[0];
    for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] < res) {
            res = this.array[i];
        }
    }
    return res;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
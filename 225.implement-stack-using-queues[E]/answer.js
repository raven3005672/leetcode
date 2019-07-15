/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    while(this.queue2.length) {
        this.queue1.push(this.queueu2.shift())
    }
    this.queue1.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if (this.queue1.length === 0 && this.queue2.length !== 0) {
        while (this.queue2.length > 1) {
          this.queue1.push(this.queue2.shift())
        }
        return this.queue2.shift()
    } else {
        while (this.queue1.length > 1) {
          this.queue2.push(this.queue1.shift())
        }
        return this.queue1.shift()
    }
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    while (this.queue2.length) {
        this.queue1.push(this.queue2.shift())
    }
    return this.queue1[this.queue1.length - 1]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    while (this.queue2.length) {
        this.queue1.push(this.queue2.shift())
    }
    return !this.queue1.length
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.queue = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.queue.shift();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.queue[0]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.queue.length == 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


var MyQueue = function() {
  this.inStack = [];
  this.outStack = [];
};

MyQueue.prototype.push = function(x) {
  this.inStack.push(x);
};

MyQueue.prototype.pop = function() {
  if (!this.outStack.length) {
      this.in2out();
  }
  return this.outStack.pop();
};

MyQueue.prototype.peek = function() {
  if (!this.outStack.length) {
      this.in2out();
  }
  return this.outStack[this.outStack.length - 1];
};

MyQueue.prototype.empty = function() {
  return this.outStack.length === 0 && this.inStack.length === 0;
};

MyQueue.prototype.in2out = function() {
  while (this.inStack.length) {
      this.outStack.push(this.inStack.pop());
  }
}

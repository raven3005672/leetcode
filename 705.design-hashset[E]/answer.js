/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.arr = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if(!this.arr.includes(key)){
        this.arr.push(key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    var idx = this.arr.indexOf(key);
    if(idx > -1){
        this.arr.splice(idx, 1);
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    var idx = this.arr.indexOf(key);
    return idx > -1 ? true : false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
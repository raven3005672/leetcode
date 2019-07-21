
var RecentCounter = function() {
    this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    let count = 1;
    while(count <= this.queue.length) {
        if (t - this.queue[this.queue.length - count] <= 3000 ) {
            count++;
        } else {
            break;
        }
    }
    this.queue.push(t);
    return count
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
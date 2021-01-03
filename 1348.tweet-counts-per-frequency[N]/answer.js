var TweetCounts = function () {
  this.freqInterval = {
    minute: 60,
    hour: 3600,
    day: 86400,
  };
  this.data = new Map();
}

/** 
* @param {string} tweetName 
* @param {number} time
* @return {void}
*/
TweetCounts.prototype.recordTweet = function (tweetName, time) {
  if (this.data.has(tweetName) === false) {
    this.data.set(tweetName, []);
  }
  this.data.get(tweetName).push(time);
};

/** 
* @param {string} freq 
* @param {string} tweetName 
* @param {number} startTime 
* @param {number} endTime
* @return {number[]}
*/
TweetCounts.prototype.getTweetCountsPerFrequency = function (freq, tweetName, startTime, endTime) {
  const interval = this.freqInterval[freq];
  const ret = new Uint16Array(Math.ceil((endTime - startTime + 1) / interval));
  if (this.data.has(tweetName)) {
    for (const time of this.data.get(tweetName)) {
      if (time > endTime || time < startTime) continue;
      ++ret[Math.floor((time - startTime + 1) / interval)];
    }
  }
  return ret;
};

/**
* Your TweetCounts object will be instantiated and called as such:
* var obj = new TweetCounts()
* obj.recordTweet(tweetName,time)
* var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
*/
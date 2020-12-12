/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  var start = 1
  var end = n

  while(end >= start){
      console.log(start,end)
      var mid = Math.floor((start + end)/2)
      switch(guess(mid)){
          case -1 : 
             end = mid
             break;
          case 1 : 
              start = mid+1
              break;
          case 0 : 
              return mid
      }
      
  }
};

/**
 * 思路：二分查找
 * 时间复杂度：O(log2n)，空间复杂度：O(1)
 */
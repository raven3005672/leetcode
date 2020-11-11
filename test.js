ring = 'godding';
key = 'gd';

ring = "ababcab"
key = "acbaacba"

var findRotateSteps = function(ring, key) {
  let libLength = ring.length;
  let kLength = key.length;
  let tempIndexRight = 0;
  let right = [0];
  let tempIndexLeft = 0;
  let left = [0];
  for (let i = 0; i < kLength; i++) {
    let target = key.charAt(i);
    let tempStepRight = 0;
    while(i < kLength) {
      if (ring.charAt(tempIndexRight) == target) {
        right.push({
          value: tempStepRight + 1,
          index: tempIndexRight
        });
        break;
      } else {
        tempIndexRight = (tempIndexRight + 1) % libLength;
        tempStepRight++;
      }
    }
    let tempStepLeft = 0;
    while(i < kLength) {
      if (ring.charAt(tempIndexLeft) == target) {
        left.push({
          value: tempStepLeft + 1,
          index: tempIndexLeft
        });
        break;
      } else {
        tempIndexLeft = (tempIndexLeft - 1 < 0 ? tempIndexLeft - 1 + libLength : tempIndexLeft - 1) % libLength;
        tempStepLeft++;
      }
    }
  }
  let dp = [];
  dp[0] = 0;
  let diff = 0;
  for (let i = 1; i < kLength + 1; i++) {
    if (right[i].value > left[i].value) {
      
    }
    console.log(right[i], left[i])
    // if (right[i] > left[i]) {
    // }
  }
  console.log(dp);
  console.log(right)
  console.log(left)
  // return dp.reduce((a,b) => a + b, 0);
};

result = findRotateSteps(ring, key);
console.log(result)
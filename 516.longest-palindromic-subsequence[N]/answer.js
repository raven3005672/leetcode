/**
 * @param {string} s
 * @return {number}
 */

// 子序列可以跳着取
// bbbab 的子序列可以是bbb()b
var longestPalindromeSubseq = function(s) {
    var arr=s.split('');
    var dp=new Array(arr.length).fill(0).map(function(a){
        return new Array(arr.length).fill(1);
    })
    for(var i=arr.length-1;i>=0;i--){
        for(var ii=i+1;ii<arr.length;ii++){
            if(arr[i]==arr[ii]){
                if(i+1>ii-1){
                    dp[i][ii]=2;
                }else{
                    dp[i][ii]=dp[i+1][ii-1]+2;
                }
            }else{
                    dp[i][ii]=Math.max(dp[i+1][ii],dp[i][ii-1]);
            }
        }
    }
    return dp[0][arr.length-1];
};
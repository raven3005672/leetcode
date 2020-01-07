/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];
    let tmpPath = [];
    let backtrack = (tmpPath, start) => {
        if (tmpPath.length == k) {
            result.push(tmpPath);
            return;
        }
        for (let i = start; i < n + 1; i++) {
            tmpPath.push(i);
            backtrack(tmpPath.slice(), i + 1);
            tmpPath.pop();
        }
    }
    backtrack(tmpPath, 1);
    return result;
};


// 递归回溯
var combine = function(n, k) {
    var result = [];
    var subresult = [];
    function combineSub(start,subresult){
        //terminator
        if(subresult.length == k){
            result.push(subresult.slice(0));
            return;
        }
        for(var i= start;i<=n;i++){
            subresult.push(i);
            combineSub(i+1,subresult);
            subresult.pop();            
        }   
    }
    combineSub(1,subresult);
    return result;
};
// 优化
var combine = function(n, k) {
    var result = [];
    var subresult = [];
    function combineSub(start,subresult){
        //terminator
        if(subresult.length == k){
            result.push(subresult.slice(0));
            return;
        }
        var len = subresult.length;
        for(var i= start;i<=n-(k-len)+1;i++){
            subresult.push(i);
            combineSub(i+1,subresult);
            subresult.pop();            
        }   
    }
    combineSub(1,subresult);
    return result;
};
// 迭代回溯
var combine = function(n, k) {
    var result = [];
    var subresult = [];
    // 初始化k个数字的临时组合各个元素为0
    // 便于++对应 n的1，2，3，4..n
    for(var r = 0;r<k;r++){
        subresult[r] = 0;
    }
    // n的总个数达不到k组合的个数 不可能实现
    if(n < k){
        return result;
    }
    // 迭代索引
    var i = 0;
    while(i >= 0){
        // 当前数字加一 对于回溯中 subresult push 一个新的i 即为上一个i+1
        subresult[i]++;
        // 当i循环到n时，此时 i=n+1 
        // i-- 对应回溯的函数调用执行栈的逆序出栈 即回到上一层的组合状态操作
        if(subresult[i] > n){
            i--;
        }
        // 索引从0开始 i == k-1 相等于 回溯i从1开始后i==k 的情况
        else if(i == k -1){
            result.push(subresult.slice(0));
        }
        // 
        else{
            // 对于回溯外层for循环的下一层i操作 即start
            ++i;
            // 相当于回溯的pop操作 去掉新加的值 退回上一层的值重新递归 此处为迭代
            subresult[i] = subresult[i-1];
        }
    }
    return result;
};
// 递归合并
var combine = function(n, k) {
    var result = [];
    var subresult = [];
    // n==k/k==0 对于两种情况边界
	if( n==k || k == 0){
        var tmp = [];
		for(var i = 1;i<=k;i++){
			subresult.push(i);
        }
        // 构造如[[x]]的返回形式
        tmp.push(subresult);
		return tmp;
	}
	// n-1 里选 k-1 个
    var result = combine(n-1,k-1);
    // 组合[[x,y]]：第n个数被选择=>[[x,y,n]]
	result.map((arr) => arr.push(n));
	// n-1 里选 k 个
    var tmp = combine(n-1,k);
    // 第二种情况的结果打散装入返回数组里去
    // result:[[x,y]]、tmp[[x1,y1]]
    // ==> result:[[x,y],[x1,y1]]
    tmp.map((arr) => result.push(arr));
    // 返回每次成功组装的结果集，最后递归终点则返回所以可能组合
	return result;
};
// 动态规划
var combine = function(n, k) {
    var dp = new Array(n+1);
    for(var ii = 0;ii<=n;ii++){
        dp[ii] = new Array(k+1);
        dp[ii][0] = [[]];
    }
    console.log(dp);
    // i：1~n
    for(var i = 1;i <= n;i++){
        //j：1～i/k
        for(var j = 1;j <= i && j <= k ;j++){
            dp[i][j] = [];
            // 从 i-1 个里选 j 个
            // 即从上题解法的：从 n-1 个里选 k个
            if(i > j){
                var tmpA = dp[i-1][j];
                for(var t = 0;t<tmpA.length;t++){
                    dp[i][j].push(tmpA[t]);
                }
            }
            // 从 i-1 个里选 j-1个
            var tmpB = dp[i-1][j-1];
            for(var z = 0;z < tmpB.length;z++){
                // 这里注意不能修改dp[i-1][j-1]的原数组元素，需要深拷贝
                var tmpC = [].concat(tmpB[z]);
                tmpC.push(i);
                dp[i][j].push(tmpC);
            }
        }
    }
    return dp[n][k];
};
// 迭代组合
var combine = function(n, k) {
    if(n == 0 || k == 0 || k > n) return [];
    var res = [];
    // 个数为1的所以可能
    for(var z = 1;z <= n+1-k;z++){
        res.push([z]);
    }
    // 第一层循环，从 2 到 k，直到k符合题意
    for(var i = 2;i <= k;i++){
         var tmp = [];
        // 第二层循环，遍历之前的所有结果
        for(var r = 0;r <res.length;r++){
            // 第三层循环，继续扩展组合集合，每次增加一个数
            // 此处s <= n-(k-(i-1))+1类似解法一的优化版不必循环到n
            // k - 当前组合的个数 = 还需要的数字个数 
            // (k-(i-1)) == 还需要的数字个数，i-1因为第一个只有一个数字的所有组合已经确定
            // n - 还需要的数字个数 + 1  == 遍历的末尾索引值，+1是因为第n个数也可以取(如n=5：1，2，3，4，5)
            for(var s = res[r][res[r].length-1]+1;s <= n-(k-(i-1))+1;s++){
                var tmpB = [].concat(res[r]);
                tmpB.push(s);
                tmp.push(tmpB);
            }
        }
        res = tmp;
    }
    return res;
}

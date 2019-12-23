/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
   
};

// 模运算公式
// (a + b) % p = (a % p + b % p) % p
// (a - b) % p = (a % p - b % p) % p 
// (a * b) % p = (a % p * b % p) % p
// a ^ b % p = ((a % p)^b) % p

// 例如： a=2， b=[3,1]=3*10+1
// 因为b的长度可能非常大，所以不可能把b求出来，再算
// 但b是十进制的 所以，b[i]=b[i]*10+前面的值

// b[i]%m = (a^b[i]%m*a^(10*i)%m)%m
// 因为i可能非常大 所以  a^(10*i) 不可能一次算出来 
// 但可以每次循环时 累乘一次 a^10 这样即使i再大也没有关系了
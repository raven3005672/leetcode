// 基本思路，未做细节处理
var x = 123123123124;
function reverse(x) {
    let revertedNumber = 0;
    while(x) {
        console.log(x)
        console.log(revertedNumber)
        console.log('_____')
        revertedNumber = revertedNumber * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    console.log('result')
    console.log(x)
    console.log(revertedNumber)
}
console.log(reverse(x))
// 牛顿迭代法
// https://en.wikipedia.org/wiki/Integer_square_root#Using_only_integer_division
// int x; result r;
// 无限逼近，需要增加判断条件，简单应用查看69题
while(r > (x / r)) {
    r = (r + (x / r)) / 2;
}
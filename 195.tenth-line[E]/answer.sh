# 以下三种方式均可以运行通过：
grep -n "" file.txt | grep -w '10' | cut -d: -f2
sed -n '10p' file.txt
awk '{if(NR==10){print $0}}' file.txt

# 但是考虑到说明中行数不足10的情况处理，可以做如下处理：
row_num=$(cat file.txt | wc -l)
echo $row_num
if [ $row_num -lt 10 ];then
    echo "The number of row is less than 10"
else
    awk '{if(NR==10){print $0}}' file.txt
fi

# 其中文件行数row_num可以使用如下几种方式获取
awk '{print NR}' file.txt | tail -n1
10
awk 'END{print NR}' file.txt 
10
grep -nc "" file.txt 
10
grep -c "" file.txt 
10
grep -vc "^$" file.txt 
10
grep -n "" file.txt|awk -F: '{print '}|tail -n1 | cut -d: -f1
10
grep -nc "" file.txt
10
sed -n "$=" file.txt 
10
wc -l file.txt 
10 file.txt
cat file.txt | wc -l
10
wc -l file.txt | cut -d' ' -f1
10

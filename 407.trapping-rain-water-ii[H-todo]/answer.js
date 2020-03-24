/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
    if(heightMap.length<3){
        return 0;
    }
    else if(heightMap[0].length<3){
        return 0;
    }
    var max_height = 0;
    var newArr = new Array();
    for(var i=0;i<heightMap.length;i++){
        newArr[i]=new Array(); 
        for(var j=0;j<heightMap[i].length;j++){
            newArr[i][j]=heightMap[i][j];
            //找出最大值
            if(heightMap[i][j]>max_height){
                max_height = heightMap[i][j];
            }
            if(i>0&&j>0&&i<heightMap.length-1&&j<heightMap[i].length-1){
                if(max_height>heightMap[i][j]){
                    newArr[i][j]=max_height;
                }

            }
        }
    }


    var num_temp =1;
    var count=0;
    while(num_temp!=0){
        num_temp=0;
        for(var i=1;i<newArr.length-1;i++){
            for(var j=1;j<newArr[i].length-1;j++){
                count++;
                var height = newArr[i][j];
                var height1= heightMap[i][j];
                if(height ==height1){
                    continue;
                }
                var up = newArr[i-1][j];
                var down = newArr[i+1][j];
                var left = newArr[i][j-1];
                var right = newArr[i][j+1];
                if(height>up){
                    if(up<heightMap[i][j]){
                        height=heightMap[i][j];
                    }
                    else{
                        height = up;
                    }
                    num_temp++;
                }
                if(height>down){
                    if(down<heightMap[i][j]){
                        height=heightMap[i][j];
                    }
                    else{
                        height = down;
                    }
                    num_temp++;
                }
                if(height>left){
                    if(left<heightMap[i][j]){
                        height=heightMap[i][j];
                    }
                    else{
                        height = left;
                    }
                    num_temp++;
                }
                if(height>right){
                    if(right<heightMap[i][j]){
                        height=heightMap[i][j];
                    }
                    else{
                        height = right;
                    }
                    num_temp++;
                }
                    newArr[i][j]=height;
            }
        }
    }
    console.log("次数："+count);
    var num=0;
    for(var i=0;i<heightMap.length;i++){
        for(var j=0;j<heightMap[i].length;j++){
            num += newArr[i][j]-heightMap[i][j];
        }
    }
    return num;
};

// 先把最外层的作为围栏，选择一个最低的围栏，如果这个围栏的临界点都比他大，他们此围栏可以删除，邻节点作为新的围栏。
// 如果邻节点比他小，那么邻节点可存储的水是两者高度之差。此时在邻节点设置围栏，高度为当前围栏高度。

//   trapRainWater(heightMap)

//
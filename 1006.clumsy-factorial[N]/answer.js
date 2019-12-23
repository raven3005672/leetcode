var clumsy = function(N) {
    switch(N){
        case 1:return 1;
        case 2:return 2;
        case 3:return 6; 
        case 4:return 7;
    }
    if(N%4 == 3){//3,7,11    F(11) = 11*10/9  +  8-7*6/5  +  4-3*2/1 = 12 + 0 + -2
        return N-1;
    }
    if(N%4 == 2){//2,6,10    F(10) = 10*9/8  +  7-6*5/4  +  3-2*1 = 11 + 0 + 1
        return N+2;
    }
    if(N%4 == 1){//1,5,9    F(9) = 9*8/7  +  6-5*4/3  +  2-1 = 10 + 0 + 1
        return N+2;
    }
    if(N%4 == 0){//4,8,12    F(8) = 8*7/6  +  5-4*3/2  +  1 = 9 -1 + 1
        return N+1;
    }
};
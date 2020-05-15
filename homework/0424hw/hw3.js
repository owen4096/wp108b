function fac(a)
{
    var array=[];
    var x=2;
    while(a>1)
    {
        if (a%x==0)
    {
        array.push(x);
        a=a/x;
        continue;
    }
        x++;
    }
    return array;
}

console.log(fac(45));


array1=[[1,1,1],[33,33,3]];
array2=[[1,1,1],[0,0,0]];
array3=[];
for(i=0;i<array1.length;i++)
{ 
    array3[i]=[];
    for(j=0;j<array1[i].length;j++)
    {
        array3[i][j]=array1[i][j]+array2[i][j];
    }
}
console.log("ans:",array3);
array1=[[1,1,1],[33,33,3]];
array2=[];
for(j=0;j<3;j++)
{ 
    array2[j]=[];

    for(i=0;i<2;i++)
    {
        array2[j][i]=array1[i][j];
    }
}
console.log("轉置矩陣為",array2);
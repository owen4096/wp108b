var a=[1,2,3,4,5]

var i=0,j=0;sum=0,b=0,c=0,d=0,sava=0;f=1;

for(i;i<a.length;i++)
{
    sum=sum+a[i];
}

b=sum/a.length;

for(j;j<a.length;j++)
{
   c=b-a[j];
   c=c*c;
   d=d+c;
}

d=d/a.length;

sava=Math.sqrt(d);

console.log("標準差為:",sava);



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



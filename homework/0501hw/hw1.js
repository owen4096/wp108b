var alpha =
{
    狗:'dog',貓:'cat',一隻:'a',追:'chase',吃:'eat'
};
function trans(t)
{
    var english =[];
    for(let i in t )
    {
        var englishword = t[i];
        var chineseword = alpha[englishword];
        english.push(chineseword);
    }

    return english;
}
var english =trans(process.argv.slice(2));
console.log(english);
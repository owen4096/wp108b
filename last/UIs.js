
const Ui = {}

/*宣告某東西=什麼的函式*/
Ui.id = function(path) 
{
  return document.getElementById(path)
}

Ui.one = function(path)
{
  return document.querySelector(path)
}

Ui.showPanel = function(name)
{
  document.querySelectorAll('.panel').forEach((node)=>node.style.display='none')
  Ui.id(name).style.display = 'block'
}

Ui.show = function (html)
{
  Ui.id('main').innerHTML = html
}



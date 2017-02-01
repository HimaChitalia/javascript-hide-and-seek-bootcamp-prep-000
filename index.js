function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementsByClassName(`target`)[0]
}

function deepestChild(){
  return document.querySelector(`#grand-node div div div div`)
}

function increaseRankBy(n){
  var ranks = document.getElementById(`app`).querySelectorAll(`ul.ranked-list li`)

for (let i = 0, l = ranks.length; i < l; i++)
ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
}
var acertos = 0
function erro(){
   var explicacao = document.getElementById('explicacao')
   var next = document.getElementById('next')
   document.getElementById('msge').innerHTML = "Que pena você errou ;-;"
   explicacao.style.display = 'block'
   next.style.display = 'block'
   document.getElementById('proxm').style.display = "inline"
   
   
}

function certo(){
   acertos++
   
   
   img = document.getElementById('msge')
   
   img.style.display = "block"
}

var acertos = 0
function erro(){
   var explicacao = document.getElementById('explicacao')
   var next = document.getElementById('next')
   explicacao.style.display = 'block'
   next.style.display = 'block'
   acertos = 0
}
function acerto(){
   acertos++
}
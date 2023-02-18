var acertos = 0
function erro(){
   var explicacao = document.getElementById('explicacao')
   var next = document.getElementById('next')
   document.getElementById('msge').innerHTML = "Que pena você errou ;-;"
   explicacao.style.display = 'block'
   next.style.display = 'block'

   
   
}
function erro2(){
   var explicacao = document.getElementById('explicacao')
   explicacao.style.display = 'block'
   styles = explicacao.style
   styles.color = "red"
   styles.fontSize = "10vh"
}



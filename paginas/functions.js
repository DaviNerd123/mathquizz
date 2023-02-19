var acertos = 0
function erro(){
   var exp = String(document.getElementById('explicacao'))
   var pag = document.getElementsById('body')
   var explicacao = document.getElementById('explicacao')
   var next = document.getElementById('next')
   document.getElementById('msge').innerHTML = "Que pena você errou ;-;"
   explicacao.style.display = 'block'
   next.style.display = 'block'
   document.getElementById("body").innerHTML = "<p>o</p>"


   
}
function erro2(){
   var explicacao = document.getElementById('explicacao')
   explicacao.style.display = 'block'
   styles = explicacao.style
   styles.color = "red"
   styles.fontSize = "10vh"
}

function certo(){
   Var img = document.getElementById('msge')
   Var img2 = document.getElementById('img')
   img.style.display = "block"
   img2.style.display = "block"
}

function certo2(){
   img = document.getElementById('msge')
   
   img.style.display = "block"
}


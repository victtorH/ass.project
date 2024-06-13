var tel = document.getElementById('escrita')
var til = document.getElementById('titulos')
var bnt = document.getElementById('começar')

bnt.addEventListener('mouseenter',foi)
bnt.addEventListener('mouseleave',voltou)
tel.addEventListener('mouseenter', entrar)
tel.addEventListener('mouseleave', sair)
bnt.addEventListener('click',clique)

function  entrar(){

tel.style = ' position: absolute;z-index: 2;border-radius: 10px;transition: 3s;height: 250vh;transform: rotate(45deg);background-image: linear-gradient(to bottom, rgba(240, 248, 255, 0.418), rgb(255, 255, 255));font-size: large;width: 100vh;bottom: -80%;right: -50%;text-align: center; object-fit: cover;'
til.innerHTML = '<h1>PROJETO DE VIDA</h1><p>tragedias ambientais causadas pelo ser humano</p>'
// bnt.style = 'bottom:20%; right:20%; color: black; background-color:white; height: 4%;width: 10%'
}


function sair( ){
til.innerHTML = " "
tel.style = 'position: absolute;z-index: 2;border-radius: 10px;transition: 3s;height: 110vh;transform: rotate(45deg);background-image: linear-gradient(to bottom, rgba(240, 248, 255, 0.418), rgb(255, 255, 255));font-size: large;width: 100vh;bottom: -80%;right: -50%;text-align: center; object-fit: cover;'
// bnt.style = ' right: 5%;bottom: 10%; color: white; background-color:greenyellow; height:2.5%;width: 5%;'
}
function foi( ){
    entrar.apply()
function clique( ){
     bnt.innerHTML = 'src="INICIO.html"'
}
    
}
function voltou(){
    sair.apply()

}
var tel = document.getElementById('escrita')
var til = document.getElementById('titulos')
var bnt = document.getElementById('começar')

bnt.addEventListener('mouseenter',foi)
bnt.addEventListener('mouseleave',voltou)
tel.addEventListener('mouseenter', entrar)
tel.addEventListener('mouseleave', sair)

function  entrar(){

tel.style = 'transform: rotate(0deg);   height: 110vh;  width: 50%;  object-fit: cover;  bottom: 0px;right: 0px;'
til.innerHTML = '<h1>PROJETO DE VIDA</h1><p>tragedias ambientais causadas pelo ser humano</p>'
bnt.style = 'bottom:118px; right:15%; color: black; background-color:white; height: 30px;'
}


function sair( ){
til.innerHTML = " "
tel.style = ' transform: rotate(50deg);  width: 300px;bottom: -180px;right: -130px;background: rgb(255, 255, 255);transform: rotate(50deg)height: 400px;'
bnt.style = ' right: 5%;bottom: 30px; color: white; background-color:greenyellow; height:30;'
}
function foi( ){
    entrar.apply()
    
}
function voltou(){
    sair.apply()

}
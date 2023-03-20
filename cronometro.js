const tempo = document.getElementById("tempo1")
const iniciar = document.getElementById("btn-iniciar")
const pausar = document.getElementById("btn-pausar")
const zerar = document.getElementById("btn-zerar")
let segundos = 0;
let timer
function CriandoSegundos(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UCT'
    })
}
function iniciarTempo(){
     timer = setInterval(function(){
        segundos++;
        tempo.innerHTML = CriandoSegundos(segundos);
    },1000)
}
iniciar.addEventListener('click', function(event){
    clearInterval(timer)
    iniciarTempo()
})
pausar.addEventListener('click', function(event){
    clearInterval(timer)
})
zerar.addEventListener('click', function(event){
    clearInterval(timer);
    tempo.innerHTML = '00:00:00';
    segundos = 0;
})
const cartasAnimadas = ['/images/bobrossparrot.gif','/images/explodyparrot.gif','/images/fiestaparrot.gif','/images/metalparrot.gif','/images/revertitparrot.gif','/images/tripletsparrot.gif','/images/unicornparrot.gif']


function colocarCartas(){
    let numeroDeCartas  = prompt('Quantas cartas ?');
    let list = document.querySelector('.cartas');
    numeroDeCartas = Number(numeroDeCartas);
    if(numeroDeCartas >= 4 && numeroDeCartas <= 12 && numeroDeCartas%2 === 0 && typeof numeroDeCartas == "number" ){
        for(let i = 0; i < numeroDeCartas;i++){
            list.innerHTML += `<li class='carta' onclick='selecionarCarta(this)'><img class='front' src='/images/front.png'><img class='gif escondido' src='${cartasAnimadas[aleatorio(6)]}'></li>`;
        }
    }else{
        alert('Erro');
        colocarCartas();
    }  
}

function selecionarCarta(elemento){
    elemento.querySelector('.front').classList.add('escondido');
    elemento.querySelector('.gif').classList.remove('escondido');
}

function aleatorio(max){
    
    return Math.ceil(Math.random() * (max - 0) + 0);
}

colocarCartas();
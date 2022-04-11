const cartasAnimadas = ['bobrossparrot','explodyparrot','fiestaparrot','metalparrot','revertitparrot','tripletsparrot', 'unicornparrot'];
cartasAnimadas.sort(comparador);
let elemento1;
let elemento2;
let total = 0;

function colocarCartas(){
    let numeroDeCartas  = prompt('Quantas cartas ?');
    numeroDeCartas = Number(numeroDeCartas);
    if(numeroDeCartas >= 4 && numeroDeCartas <= 12 && numeroDeCartas%2 === 0 && typeof numeroDeCartas == "number" ){
        criaCartas(numeroDeCartas);
    }else{
        alert('Erro');
        colocarCartas();
    }  
}

function criaCartas(numeroDeCartas){
    const repositorio = [];
    repositorio.sort(comparador);
     cartas = document.querySelector('.cartas');
     cartas.innerHTML = ""
     
    total += numeroDeCartas
    for(let i = 0; i < numeroDeCartas / 2; i++){
        repositorio.push(cartasAnimadas[i]);
        repositorio.push(cartasAnimadas[i]);
    }
    repositorio.sort(comparador);
    
    for (let j = 0; j < numeroDeCartas; j++){
        cartas.innerHTML += `
        <li class='carta' onclick='selecionarCarta(this)'><img class='front' src='/images/front.png'><img class='gif escondido' src='images/${repositorio[j]}.gif'></li>`;
    }
      
}

function selecionarCarta(elemento){
    elemento.querySelector('.front').classList.add('escondido');
    elemento.querySelector('.gif').classList.remove('escondido');
}

function aleatorio(max){
    
    return Math.ceil(Math.random() * (max - 0) + 0);
}

function comparador() { 
	return Math.random() - 0.5; 
}

colocarCartas();
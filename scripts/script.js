const cartasAnimadas = ['bobrossparrot','explodyparrot','fiestaparrot','metalparrot','revertitparrot','tripletsparrot', 'unicornparrot'];
cartasAnimadas.sort(comparador);
let elemento1;
let elemento2;
let cartas;
let contador = 0;
let total = 0;
let par =0;

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
    const guardarCartas = [];
    guardarCartas.sort(comparador);
     cartas = document.querySelector('.cartas');
     cartas.innerHTML = ""
     
    total += numeroDeCartas
    for(let i = 0; i < numeroDeCartas / 2; i++){
        guardarCartas.push(cartasAnimadas[i]);
        guardarCartas.push(cartasAnimadas[i]);
    }
    guardarCartas.sort(comparador);
    
    for (let j = 0; j < numeroDeCartas; j++){
        cartas.innerHTML += `
        <li class='carta' onclick='selecionarCarta(this)'>
        <div class='front face' >
        <img src='/images/front.png'>
        </div>
        <div class='back face'>
        <img  src='images/${guardarCartas[j]}.gif'></li>
        </div>
        `;
        
    }
      
}

function selecionarCarta(elemento){
    if (elemento.classList.contains("rotate")){
        return; 
    }
    elemento.classList.add("rotate");
    contador++;

    const primeira = elemento1 == undefined;
    if (primeira){
        elemento1 = elemento;
        return;
    }

    elemento2 = elemento;

   
    if (elemento1.innerHTML == elemento2.innerHTML){
        par++;
    }

    const errado = elemento1.innerHTML != elemento2.innerHTML;

   if (errado){
       setTimeout(retornaOrigem, 1000, elemento1, elemento2);
   }

    elemento1 = undefined;
   elemento2 = undefined;
   venceu()

}

function aleatorio(max){
    
    return Math.ceil(Math.random() * (max - 0) + 0);
}

function comparador() { 
	return Math.random() - 0.5; 
}

colocarCartas();

function retornaOrigem(elemento1, elemento2){
    elemento1.classList.remove("rotate");
    elemento2.classList.remove("rotate");
}

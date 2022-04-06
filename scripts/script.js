
function colocarCartas(){
    let numeroDeCartas  = prompt('Quantas cartas ?');
    let list = document.querySelector('.cartas');
    numeroDeCartas = Number(numeroDeCartas);
    if(numeroDeCartas >= 4 && numeroDeCartas <= 12 && numeroDeCartas%2 == 0){
        for(let i = 0; i < numeroDeCartas;i++){
            list.innerHTML += `<li class='carta'><img src='/images/front.png'></li>`;
        }
    }else{
        alert('Erro');
        colocarCartas();
    }  
}

colocarCartas();
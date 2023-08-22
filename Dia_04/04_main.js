alert("Este é um jogo de adivinhação !")

const numero = Math.floor(Math.random() * (10 - 0 + 1) + 0);
console.log(numero);
let pergunta = "";
let acertou = false;

for(let contador = 0; contador < 3; contador ++) {
      
    pergunta = prompt("Tente adivinhar o número em que estou pensando, escolha um número de 0 a 10!");

    if(pergunta == numero) {
    
        alert(`Você acertou o número em que eu pensei é ${numero}!`);
        let acertou = true;
        contador = 3;
        
    }else {
        
        alert("Você erro! Tente novamente !");
    
    }

}

if(acertou == false) {
    alert(`Infelizmente você não acertou o número em que pensei era ${numero}!`);
}




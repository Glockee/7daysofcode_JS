alert("Bem vindo ao jogo de escolhas de destinos! Espero que goste!");

const area = prompt("Qual área você gostaria de seguir Front-End ou Back-End?");
let linguagem = "";

if (area === 'Front-End') {
    linguagem = prompt ("Em Front-End, você gostaria de seguir em React ou Vue?");
} else if(area === 'Back-End'){
    linguagem = prompt ("Em Back-End, você gostaria de seguir em C# ou Java?");
}else {
    alert("Você digitou uma resposta inválida, por favor digita corretamente a resposta de acordo com a pergunta!");
}

const desenvolvimento = prompt ("Você gostaria de seguir se especializando na area ou se desenvolver para se tornar um FullStack, digite Especializar ou FullStack !");

if (desenvolvimento === 'Especializar') {
    alert(`Excelente continue se especializando em ${linguagem} para dominar a área ${area}`);
} else if(desenvolvimento === 'FullStack'){
    alert(`Continue estudando outras linguagens além da ${linguagem} para se tornar um FullStack`);
}else {
    alert("Você digitou uma resposta inválida, por favor digita corretamente a resposta de acordo com a pergunta!");
}

let listaTecnologia = [];

let encerrarJogo ='Continuar';

while (encerrarJogo !== 'Sair') {
    
     let resposta = prompt ("Quais são as tecnologias nas quais a você gostaria de se especializar ou de conhecer? Caso não tenha mais nenhuma digite Sair !");
     
    if (resposta !== 'Sair') {
        listaTecnologia.push(resposta);
        alert(`${resposta} é realmente uma tecnologia muito legal!`);
    }else{
        encerrarJogo = resposta;
    }

   console.log(listaTecnologia);
}   
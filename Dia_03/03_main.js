alert("Bem vindo ao jogo de escolhas de destinos! Espero que goste!");

const area = prompt("Qual área você gostaria de seguir Front-End ou Back-End?");

if (area === 'Front-End') {
    const frontEnd = prompt ("Em Front-End, você gostaria de seguir em React ou Vue?");
} else if(area === 'Back-End'){
    const backEnd = prompt ("Em Back-End, você gostaria de seguir em C# ou Java?");
}else {
    alert("Você digitou uma resposta inválida, por favor digita corretamente a resposta de acordo com a pergunta!");
}


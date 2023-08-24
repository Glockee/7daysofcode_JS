alert("Bem vindo a nossa calculadora, primeiro devemos escolher qual operação efetuar e posteriormente informar os valores !")

let x = 0;
let y = 0;
let resultado = 0;
let operacao = "";


while(operacao != "sair") {

    operacao = prompt("Escolha qual tipo de operação você quer efetuar:\nsoma\nsubtracao\nmultiplicacao\ndivisao\nsair");

    if(operacao == "sair") {
        alert("Até a próxima!");
        break;
    }

    x = parseInt(prompt("Informe o primeiro valor !"), 10);
    y = parseInt(prompt("Informe o segundo valor !"),10);
    
    switch(operacao) {
        case 'soma':
            soma();
            alert(`Resultado da Soma é ${resultado}`);
            break;
        case 'subtracao':
            subtracao();
            alert(`Resultado da Subtração é ${resultado}`);
            break;
        case 'multiplicacao':
            multiplicacao();
            alert(`Resultado da Multiplicação é ${resultado}`);
            break;
        case 'divisao':
            divisao();
            alert(`Resultado da Divisão é ${resultado}`);
            break;
        
        default:
            alert("Essa operação não existe!");
            break;

    }

}

function soma() {
    resultado = x + y;
}

function subtracao() {
    resultado = x - y;
}

function multiplicacao() {
    resultado = x * y;
}

function divisao() {
    resultado = x / y;
}

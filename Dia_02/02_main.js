alert ("Bem Vindo ao Dia 02 do Desafio 7 day of code da Alura!");

const nome = prompt("Qual o seu nome?");
nome;

const idade = prompt("Quantos anos você tem?");
idade;

const linguagemProgramacao = prompt("Qual linguagem de programação você está estudando?");
linguagemProgramacao;

const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagemProgramacao}!`;
alert(msg);

//Exercicio Opcional
const estudarLinguagem = prompt("Você gosta de estudar " + linguagemProgramacao + "? Responda com o número 1 para SIM ou 2 para NÃO.");
estudarLinguagem;

if (estudarLinguagem == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}else{
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}

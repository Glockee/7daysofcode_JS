const nome = prompt("Qual o seu nome?");

const idade = prompt("Quantos anos você tem?");

const linguagemProgramacao = prompt("Qual linguagem de programação você está estudando?");

const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagemProgramacao}!`;

alert(msg);

//Exercicio Opcional
const estudarLinguagem = prompt("Você gosta de estudar " + linguagemProgramacao + "? Responda com o número 1 para SIM ou 2 para NÃO.");

if (estudarLinguagem == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}else{
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}

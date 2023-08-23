let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let bebidas = [];
let limpeza = [];
let outras = [];

let categoria = [frutas, laticinios, congelados, doces, bebidas, limpeza, outras];

alert("Está é a sua lista de compras! Primeiro iremos adicionar os produtos, adicione todos os produtos, e no final caso queira retirar iremos dar essa opção!");

let adicionarProduto = true;
let produto = "";
let escolhaCategoria = "";
let retirarProduto = true;
let validacaoRemover = "";

while(adicionarProduto == true) {
    
    adicionarProduto = confirm("Você deseja adicionar um produto na sua lista de compras?");
    
    if(adicionarProduto == true) {
        produto = prompt("Qual produto você deseja INSERIR na lista?");

        escolhaCategoria = prompt("Qual a categoria desse produto? Digite o número! \n 0 - Frutas \n 1 - Laticinios \n 2 - Congelados \n 3 - Doces \n 4 - Bebidas \n 5 - Limpeza \n 6 - Outras");

        categoria[escolhaCategoria].push(produto);
    }

}

while(retirarProduto == true) {
    
    retirarProduto = confirm("Você deseja RETIRAR um produto na sua lista de compras?");
    
    if(retirarProduto == true) {
       
        produto = prompt(`Qual produto você deseja retirar da lista de compras? \n 
        Frutas: ${frutas} \n 
        Laticinios: ${laticinios} \n 
        Congelados: ${congelados} \n 
        Doces: ${doces} \n 
        Bebidas: ${bebidas} \n 
        Limpeza: ${limpeza} \n 
        Outras: ${outras}`);

        for(posicaoCategoria = 0; posicaoCategoria < categoria.length; posicaoCategoria++) {
            
            validacaoRemover = false;
            
            if(categoria[posicaoCategoria].indexOf(produto) != -1) {
                alert(`Deu Certo! O produto ${produto} foi removido da sua lista!`);
                validacaoRemover = true;
                break;
              
            }

        }

        if(validacaoRemover == false) {
        alert("Este produto não existe na sua lista, verifique se digitou certo, ou o produto já foi removido !");
        } else {

            categoria[posicaoCategoria].splice(categoria[posicaoCategoria].indexOf(produto), 1);

        }
    }

}

alert(`Lista de Compras: \n Frutas: ${frutas} \n Laticinios: ${laticinios} \n Congelados: ${congelados} \n Doces: ${doces} \n Bebidas: ${bebidas} \n Limpeza: ${limpeza} \n Outras: ${outras}`);

document.write(`Frutas: ${frutas}<br>`);
document.write(`Laticinios: ${laticinios}<br>`);
document.write(`Congelados: ${congelados}<br>`);
document.write(`Doces: ${doces}<br>`);
document.write(`Bebidas: ${bebidas}<br>`);
document.write(`Limpeza: ${limpeza}<br>`);
document.write(`Outras: ${outras}<br>`);
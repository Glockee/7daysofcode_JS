let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let bebidas = [];
let limpeza = [];
let outras = [];

let categoria = [frutas, laticinios, congelados, doces, bebidas, limpeza, outras];

alert("Está é a sua lista de compras!");

let adicionarProduto = true;
let produto = "";
let escolhaCategoria = "";

while(adicionarProduto == true) {
    
    adicionarProduto = confirm("Você deseja adicionar um produto na sua lista de compras?");
    console.log(adicionarProduto);
    
    if(adicionarProduto == true) {
        produto = prompt("Qual produto você deseja inserir na lista?");
        console.log(adicionarProduto);

        escolhaCategoria = prompt("Qual a categoria desse produto? Digite o número! \n 0 - Frutas \n 1 - Laticinios \n 2 - Congelados \n 3 - Doces \n 4 - Bebidas \n 5 - Limpeza \n 6 - Outras");

        categoria[escolhaCategoria].push(produto);
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
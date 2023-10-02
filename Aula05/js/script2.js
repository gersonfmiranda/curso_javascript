const numeros = [20, 35, 45, 12];
console.log(numeros);
numeros.push(50); // inseri o número no final do array
console.log(numeros);
numeros.unshift(200); //inseri o número no inicio do array
console.log(numeros);
console.log ("---- Números adicionados pelo usuário ----");

// var valores = prompt("Digite números separados por vírgula (,)");
// console.log("Isso é uma string: " +valores);

// const array_valores = valores.split(","); // pega uma string e analisa o separador de caracteres para dividir em um array
// console.log (array_valores);

// //verifica o tipo de elementos valores e array valores
// console.log(typeof(valores));
// console.log(typeof(array_valores));

const lista_produtos = [
    ["Código", "Nome", "Preço"],
    ["51", "Mouse", "R$ 50,20"],
    ["52", "Teclado", "R$ 150,20"],

]

console.log(lista_produtos);
// console.log(lista_produtos[1][1])

lista_produtos.push(["53","SSD", "200,00"]);
console.log(lista_produtos);
var novo_produto = prompt("Adicione o código, nome e preço separado por ; ").split(";");
lista_produtos.push(novo_produto);
console.log(lista_produtos);


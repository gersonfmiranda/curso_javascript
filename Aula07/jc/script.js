//Referência ao body do documento html
const body = document.body;

function msg (){
    console.log("Olá, Mundo!")
}

function array1(){
    const n1 = [12,5,15,20,37,80];
    let rs = 0;

    for(let i = 0; i < n1.length ; i++){
        rs += n1[i];
    } 

    console.log(n1);
    console.log("Resultado da soma " + rs);
}

function maior(){
    const n1 = [12,5,15,20,370,80];
    let m = n1[0];
    for (let i = 1; i < n1.length; i++){
        if( n1[i] > m){
            m =n1[i];
        }

       
    }

    console.log(n1)
    console.log("O maior valor do array é "+ m)
}

function calcular(){
    let numeros = prompt("Digite números separados por vírgula (,)")
    numeros = numeros.split(",")//split me informa qual é o caracter que separa as coisas
    console.log(numeros);
    let rs = 0
    for(let i = 0;  i < numeros.length; i++){
        rs+= parseInt(numeros[i]);
    }

    let m = numeros[0];
    for (let i = 1 ; i < numeros.length; i++){
        if(numeros[i] > m){
            m = numeros[i]
        }
    }

    console.log(`A soma resultou em ${rs} e o maior valor é ${m}`)// isso se chama interpolação

}

body.onload = calcular;

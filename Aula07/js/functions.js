// function mensagem (){
//     document.body.innerHTML = `<p>Olá, Mundo!`

// }

// document.body.onload= mensagem;

// function mensagem2(nome){

//     let n = nome || "Visitante";
//     document.body.innerHTML +=`<strong> ${n} </strong>`;

// }
// document.body.onclick= function(){
//     mensagem2("Paulo");
// };

// 

const body = document.body;
function dataHora(){
    let tempo = new Date ();
    let relogio = `${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}`
    return tempo.toLocaleDateString() + " - "+relogio;
}

body.onload = function(){

    const h1 = document.createElement("h1");
    h1.innerHTML = dataHora();
    body.appendChild(h1);

};

function opacidade05(Obj){
    Obj.style.opacity = "0.5"
}

function opacidade01(Obj){
    Obj.style.opacity = "1"
}

const foto = document.getElementsByTagName("img")[0];
const foto1 = document.getElementsByTagName("img")[1];

foto.onmouseover = function(){
 opacidade05(foto);
}

foto1.onmouseover = function(){
    opacidade05(foto1);
}

foto.onmouseout = function(){
    opacidade01(foto);}

foto1.onmouseout = function(){
    opacidade01(foto1);}





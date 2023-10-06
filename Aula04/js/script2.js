// var x = 10
// let y = 10

// if (20!= 30){
//     console.log(x)
// }

// else{
//     var z = 30 + x
//     let rs1 = z + y
// }

// console.log(rs)
//--------------------------------------

//vamos fazer uma referência a classe Date
let tempo = new Date();
console.log(tempo.getDay());
console.log(tempo.getDate());
console.log(tempo.getMonth());

switch(tempo.getDay()){
    case 0: 
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda-feira")
        break
    case 2:
        console.log("Terça-feira")
        break
    case 3:
        console.log("Quarta-feira")
        break
    case 4:
        console.log("Quinta-feira")
        break

    case 5:
        console.log("Sexta-feira")
        break

    default:
        console.log("Sábado");
        break
        
}
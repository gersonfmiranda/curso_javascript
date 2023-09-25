/*
Criar as variáveis para fazer referência aos controles html
*/

var txtnome = document.getElementById("txtNome")
var txtsalario = document.getElementById("txtSalario")
var txtinss = document.getElementById("txtInss")
var txtconvenio = document.getElementById("txtConvenio")
var txtfilhos = document.getElementById("txtNFilhos")
var txtliquido = document.getElementById("txtLiquido")
var btncalcular = document.getElementById("btnCalcular")
var texto = document.getElementById("texto")


txtsalario.onclick = function(){
    texto.innerHTML = "Digite apenas o valor do salário sem R$"
};

txtinss.onclick = function(){
    var inss = "de R$ 0,00 até R$ 1.320,00 -> 7,5% <br>"
        inss += "de R$ 1.320,01 até R$ 2.571,29 -> 9% <br>"
        inss += "de R$ 2.571,30 até R$ 3.856,94 -> 12% <br>"
        inss += "de R$ 3.856,95 até R$ 7.507,49 -> 14% <br> "
    texto.innerHTML = inss

};

txtconvenio.onclick = function(){
    texto.innerHTML ="Salários até R$ 2.500,00 o desconto é de 5%; caso contrário é de 7,5%"
};

txtfilhos.onclick = function(){
    texto.innerHTML ="Se o funcionário não tem filhos então não receberá; caso contrário receberá 5% do salário por filho."
};

btncalcular.onclick = function(){
    var rsinss 
    var rsconvenio
    var rsfilho
    var rsliquido

    if(txtsalario.value <= 1320){
        rsinss = txtsalario.value * (7.5/100)
    }
    else if (txtsalario.value <= 2571.29){
        rsinss = txtsalario.value * (9/100) 
    }
    else if (txtsalario.value <= 3856.94){
        rsinss = txtsalario.value * (12/100)
    }

    else if (txtsalario.value <= 7507.49){
        rsinss = txtsalario.value * (14/100)
    }
    else{
        rsinss = 7507.49 *(14/100)
    }

    if(txtconvenio.value <= 2500){
        rsconvenio = txtsalario.value * (5/100)

    }else{
        rsconvenio = txtsalario.value * (7.5/100)
    }

    txtliquido.value = rsinss
}

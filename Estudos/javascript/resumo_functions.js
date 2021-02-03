//Declaração da funão

function criandoFrases(){
    console.log("Aproveite a vida")
    console.log("Agradeça a Deus")
}

//Chamando a função (execute the function, run the function)
criandoFrases()

//função cmo expressao, colocando parametros

const sum = function(number1, number2){
    console.log(number1 + number2)
}

sum(1,2)//chamei e passei os argumentos.

//eu tenho q usar o return

const menoss = function(number1, number2){
    return number1 - number2
}

menoss(3,1)
console.log(menoss(3,2))
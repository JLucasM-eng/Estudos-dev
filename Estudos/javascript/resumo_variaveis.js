//  Nomes simbolicos para receber um valor
//Atalhos de codigo
//Identificadores
//3 Palavras para declarar uma variavel
//var, let e const.

var clima = "Quente"
clima = "Frio"// no var pode variar o valor 
console.log(clima)

let tempo = "Chuvoso"

console.log(tempo)

const naomuda= "Nao muda"
//naomuda = "muda" vai dar erro

//Tipos dinamicos =-===========================================


let alou = ""// o js ja define como string
console.log(typeof alou)

//===============================================

//Escope ---------------------------------------------------

//Determina a visibilidade de alguma variavel no JS

//Pra Criar vamos só abrir e fechar chaves.

{
    let x = 2
    console.log(x)
    var a = 0
}

// o tipo var é gloal e pode funcionar fora de um escopo de um bloco.
//console.log('Existe um bloco com um valor? >',x) Vai dar erro
console.log('Existe um bloco com um valor? >',a)

// Quando vc usa a var, ela vai la pra cima e declara primeiro. e depois q ela atribui, mesmo se tiver dentro de um scope.

//Agora let e const sao locais. Só funciona no escopo onde foi criada.
// teste pra exemplificar o let na questao de scope;

let y = 1

{
    y = 0
    console.log("1 - valor de y é ", y)
}

console.log("2 - o valor de y é ", y)

//-------------------------------------------------------------------------------

//Criando nomes de variaveis========================
/*Posso:
Iniciar com caracteres especiais $ _
colocar acentos 
letras maiusculas e minusculas fazem diferença
//Nao posso
Iniciar com umeros 
colocar espaços vazios.
*/ 

/// VAMOS FAZER ENTAO UM RESUMO do resumo DE TUDO QUE FOI VISTO

console.log("RESUMO do resumo")

//Variaveis e tipos de dados
// declaração ou declaration

var variavel

//assignment ou atribuição de valores

variavel = "Nome"

//Que tipo de dado foi colocado na variavel
console.log(typeof variavel)

//Agrupamento de declarações
let age, isHuman
age = 18
isHuman = true

console.log(variavel,age,isHuman)
console.log(`Usando crases eu vou escrever: O ${variavel} tem ${age} anos`)

//Objetcs 

const pessoa = {
    nome: "Adria",
    idade: 23,
    nick: "Dani",
    escolaridade: 
    {
        nome_caract: "Escolaridade",
        local: "UFOP",
        nivel: "Superior completo"
    },
    gostos_musicais: ["Funk","Brega"]
}
console.log(`A ${pessoa.nome} tem ${pessoa.idade} e seu apelido é ${pessoa.nick}. Ela formou na ${pessoa.escolaridade.local}. Onde ela ouvia muito ${pessoa.gostos_musicais[0]}`)

//Array

const animais = [
    'Leao',
    'macaco',
    'Tigre'
]
//Vendo o tamanho do array
console.log(animais.length)
//Acessando valores dentro
console.log(animais[1])

const pessoas = [
    'Ana',
    'Maria',
    {
        name: "Joao",
        idade: 15
    },
    'José'
]

console.log(pessoas[2].name)
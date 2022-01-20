//Function - reutilizar código

/**
 * Declaration - function statement
 */

// function createPhrases() {
//     console.log('Feliz 2022!')
//     console.log('Seja bem vindo a minha primeira função')
//     console.log('Estudar é a palavra chave para o sucesso.')
// }

//Executar, rodar, chamar, invocar, execute, run, call, invoke the function
// createPhrases()



//Function anonymous // expression
const sum = function(x, y) { //()parameters
    console.log(x + y)
}

sum(10,5)// arguments

const soma = function(m, n) {
    total = m + n;
    return total;
}

console.log(soma(2,2))

//Function é um liquidificador
function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2;
}

const copo = fazerSuco('Banana', 'Morango')
console.log(copo)

// Function scope
// Se declarar uma variavel no escopo global e colocar o mesmo nome dela no parametro da funcao e reatribui o valor dela, ela vai 
//ter comportamento de escopo, ou seja, no console.log vai ter dois valores o da primeira atribuicao e o da reatribuicao. Um valor
// no escopo global e o outro no escopo local
let cor = 'azul';

function mudarACor(cor) {
    return cor = 'vermelho';
}
console.log(cor)
let alteracao = mudarACor()
console.log(alteracao)

// Se declarar uma variavel no escopo global e nao colocar no parametro da funcao e apenas reatribui o valor dela dentro da funcao
// o valor automaticamente sera alterado para o valor que foi reatribuido da funcao, ou seja, vai sobrescrever.
let produto = 'Caneta';

function compra() {
    return produto = 'Caderno'
}

let finalizarCompra = compra();
console.log(produto)
console.log(finalizarCompra)


//Function hoisting
chamarFunction()

function chamarFunction() {
    console.log('Buenos Días!')
}


// Arrow function

const sayMyName = () => {
    console.log('Aleh')
}

sayMyName()


// Callback function - chamar de voltar é uma function ue passa como parametro outra function

function meuNome(nome) {
    console.log('Antes de chamar')
    nome()
    console.log('Depois de chamar')
}

meuNome(() => {
    console.log('Estou em uma callback')
})

// Function()  constructor
// Expressao new, criar um novo objeto, this keyword
//this referencia algo que esta fora 

function Person(name) {
    this.name = name;
    this.walk = function() {
        return this.name + " está andando"
    }
}

const ale = new Person("Ale")
const zoe = new Person("Zoe");
console.log(ale)
console.log(ale.walk())
console.log(zoe)
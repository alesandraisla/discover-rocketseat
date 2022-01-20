/**
 * Prototype
 * 
 * Funcionalidades
 * 
 * - prototype-based language
 * - protype chain (cadeia de protótipo) - são as propriedades que aparecem quando se coloca um ponto
 * __proto__ (obj mais puro )
 *
 */

//Para acessar
"Zoe".__proto__
20.0.__proto__

/**
 * Type conversion (typecasting - usuario faz a alteracao) vs Type coersion (JS força uma troca)
 * 
 * Alteração de um tipo de dado para outro tipo
 */

// coersion
console.log('9' + 10)

// conversion
console.log(Number('9') + 5)

/**
 * 
 * Manipulando Strings e Números
 * 
 * Transformar String em Número e número em string
 */
let string = "123";
console.log(Number(string))

let number = 321;
console.log(String(number))

/**
 * Manipulando Strings e Números
 * 
 * Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
 */

let word = "Liquidificador";
console.log(word.length);

let numbers = 692374;
console.log(String(numbers).length);

/**
 * 
 * Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
 * 
 * toFixed()
 * Passa a qt de casas decimais que deseja que exiba.
 * 
 * Replace()
 * Troca um elemento por outro
 */

let numero = 893.93928397246782;
console.log(numero.toFixed(2).replace(".", ","))

/**
 * 
 * Transforme letras minúsculas em maiúsculas. Faça o contrário disso também.
 * 

 */
let text = "hello world!";
console.log(text.toUpperCase());
console.log(text.toLowerCase())

/**
 * 
 * Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. 
 * Depois disso, transforme o array em um texto e onde eram espaços, coloque _
 * 
 * split - SEPARA (recebe no parametro o que quer separar no caso foi o espaço)
 * join - JUNTAR (recebe no parametro o tipo de separador que quer no caso _)
 */

let frase = "Amigo eu estou aqui"
let arrayDaFrase = frase.split(" ")
let fraseComUnderline = arrayDaFrase.join("_")
console.log(fraseComUnderline)

/**
 * 
 * Verificar se o texto contém a palavra Amor
 * 
 * includes - Passa como parametro o que quer verificar se tem, faz diferenca entre maiusculo e minusculo
 */

let buscarPalavra = "Eu quero viver";
console.log(buscarPalavra.includes("amor"));

/**
 * 
 * Criar Array com construtor
 * 
 * A quantidade de posicoes informa dentro do parametro
 */

let meuArray = new Array(10);
let meuSegundoArray = new Array("dormir", "estudar", "passear")
console.log(meuArray, meuSegundoArray)

/**
 * 
 * Contar elementos de um array
 */
console.log([
    "a",
    {type: "array"},
    function(){ return "olá"}
].length)

// retorna olá
console.log([
    "a",
    {type: "array"},
    function(){ return "olá"}
][2]())

//retorna array
console.log([
    "a",
    {type: "array"},
    function(){ return "olá"}
][1].type)



/**
 * 
 * Transformar uma cadeia de caracteres em elementos de um array
 */

let palavra = "Maravilhoso";
console.log(Array.from(palavra));

let techs = ["html", "css", "javascript"]

/** Adicionar um item no fim*/
techs.push("nodejs")
/**Adicionar no comeco */
techs.unshift("sql")
/**Remover do fim */
techs.pop()
/**Remover do comeco */
techs.shift()
/**Pegar somente alguns elementos do array 
 * Não faz alteracao no array
 * 1 posicao é a que quer pegar
 * 2 posicao é ate onde ele vai pegar
*/
console.log(techs.slice(1,2))
/**Remover 1 ou mais items em qualquer posicao do array 
 * causa modificacao no array
 * 1 posicao é a que quer tirar
 * 2 posicao é ate onde vai tirar
*/
console.log(techs.splice(1,2))

/**Encontrar a posicao de um elemento no array */
let index = techs.indexOf("css")
console.log(index)

console.log(techs)
















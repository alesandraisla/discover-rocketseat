/**
 * Variáveis
 * Nomes simbólicos para receber algum valor. Atalhos de código.
 * Identificadores: 3 palavras reservadas para criar uma variável.
 * var - Global funciona dentro e fora do escopo (local). Hosting - Elevacao(Pega as declaracoes 
 * e joga pra cima.
 * let - Local e funciona no escopo onde foi criada. Pode declarar no global e 
 *       reatribuir o valor do let dentro do escopo.
 * const - Local e funciona no escopo onde foi criada.
 * 
 * 
 * let cor ->> Declarar
 * let cor = 'azul'  ->> Atribuir valor
 */

let clima = "Quente";
{
    clima = "Frio";
}
console.log(clima);
console.log(typeof clima);

// agrupamento de declaracores
let name, age

name = 'Yuna'
age = 18
console.log(' A ' + name + ' tem ' + age) //Concatenando
console.log(`A ${name} tem ${age} anos`)// Interpolando valores com template literals or template strings


/**
 * O Js é uma linguagem fracamente tipada dinâmica
 * - Variáveis não precisam ter um tipo previamente definido 
 * - Podemos mudar o conteúdo da variável
 * - É case-sensitive (sensível ao caso)
 * Aceita a cadeia de caracteres Unicode.
 * Pode iniciar com tipo: $ _ 
 * iniciar com letras
 * colocar acentos
 * letras maiusculas e minusculas fazem diferenca
 * 
 * Não pode:
 * Iniciar com números, colocar espacos vazios no nome
*/

/**
 * Scope
 * Determina a visibilidade de alguma variável no JS
 * 
 * - Block Statement
 * {
 *  qualquer coisa
 * }
 */

/**
 * Operador condicional (Ternario)
 * 
 * Dependendo da condicao, nós recebemos valores diferentes
 */

// Condição então valor 1 se não valor 2
// condicao ? value1 : value2

// exemplos
// café da manhã top
let pao = true;
let queijo = true;

const niceBreakFast = pao && queijo ? 'Café top' : 'Café ruim';
console.log(niceBreakFast)

// Maior de 18  

let age = 16
const canDrive = age >= 18 ? 'Cand drive' : 'Cannot drive';
console.log(canDrive) 

/**
 * Operador de String (String operator)
 */

// Comparison (Comparacao)
//console.log('a' == 'a')

// concatenarion (concatenacao)
// Retorna a união de duas Strings
let alpha = 'alpha';
console.log(alpha + 'bet')

/**
 * Type conversion (typecasting) vs Type coersion
 */

/**
 * FALSY
 * Quando um valor é considerado false em contextos onde um booleano é obrigatório 
 * (condicionais e loops)
 * 
 * false
 * 0
 * -0
 * ""
 * null
 * undefined
 * NaN
 */

console.log(false ? 'verdadeiro' : 'false')

/**
 * TRUTHY
 * Quando um valor é considerado true em contextos onde um booleano é obrigatório 
 * (condicionais e loops)
 *
 * true
 * {}
 * []
 * 1
 * 3.23
 * "0" 
 * "false"
 * -1
 * Infinity
 * -Infinity
 */

console.log( "false" ? 'verdadeiro' : 'false')

/**
 * Operator precedence
 * Precedencia de operadores
 * 
 * - grouping                  ()
 * - Negacao e incremento      ! ++ --
 * - multiplicacao e divisao   * /
 * - adicao e subtracao        + -
 * - relacional                < > <= >=
 * - igualdade                 == != === !==
 * - AND                       &&
 * - Or                        ||
 * - Condicional               ?:
 * - assignment (atribuicao)    = += -= *= 
 */



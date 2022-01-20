/**
 * Operadores de comparacao
 * 
 * Irá comparar valores e retornar um Boolean como resposta à comparacao
 */

let one = 1;
let two = 2;

// == igual a 
//compara os valores
console.log(one == two);
console.log(one == "1");

// != diferente
console.log(one != two);
console.log(one != "1");

// === identico a (Estritamente igual)
//Compara os valores e o tipo

console.log(one === two);
console.log(one === "1");

// ===  não identico a (Estritamente diferente)
console.log(one !== two);
console.log(one !== "1");
console.log(one !== 1);

// Menor que <
console.log(one < two) // true
// Maior que >
console.log(one >= two) // false

// Menor ou igual que <=
console.log(one <= two) // true

// Maior ou igual que >=
console.log(one >= two) // false


/**
 * Operadores de atribuicao (Assignment)
 */
// let x;

// assigment
// x = 1

// addition assignment
// x += 2

// subtraction assignment
// x -= 2

// multiplication assignment
// x *= 2

// division assignment
// x /= 2

// remainder, exponetiation
// x **= 2

/**
 * Operadores lógicos (logical operatorns)
 *
 * - 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso
 */

let pao = true;
let queijo = false;

// AND &&
console.log( pao && queijo);

// OR ||
console.log(pao || queijo)

// NOT !
console.log(pao && !queijo)





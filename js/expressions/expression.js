/**
 * 
 * Expressões e operadores
 * 
 * - Expressions
 * -Operators
 *  Binary
 *  Unary
 *  Ternary
 */

//========= binary ===========
// 2 + 2;

//========= unary ===========
// ++2;
// typeof Number;
// delete pessoa.idade;

//========= Ternary ===========
// true ? 'Ola mundo' : 'Bem vindo';

/**
 * new
 * 
 * - left-hand-side expression  (Serve para criar um novo objeto)
 * 
 */

let nome = new String('Suzy');
nome.sobrenome = "Marinho"
let age = new Number(20);
let data = new Date('2022-01-01')
console.log(nome, age, data)

/** 
 * Operadores aritméticos
 */

//========= Multiplicacao ===========
console.log(2*2);

//========= Divisão ===========
console.log(10/2);

//========= Soma ===========
console.log(10+10);

//========= Subtracao ===========
console.log(10-5);

//========= Resto da divisao ===========
console.log(11%3);

//========= Incremento ===========
let increment = 0;
increment++;
console.log(increment);

//========= Decremento ===========
let decrement = 2;
decrement--;
console.log(decrement);

//========= Exponencial ===========
console.log(3 ** 3);




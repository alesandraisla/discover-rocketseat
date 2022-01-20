// 1 Declare uma variável de nome weight

let weight;

// 2 Que tipo de dado é a variável acima

console.log(typeof weight)

// 3 Declare uma variável e atribua valores para cada um dos dados:

let nome = "Lara";
let peso = 20;
let stars = 9.5;
let isSubscribed = true;

// 4 A variável student abaixo é de que tipo de dado.

let student = {
    usuario: 'Larissa',
    age: 21,
    pesa: 65.1,
    subscribed: true
}
console.log(typeof student)

console.log(`${student.usuario} de idade ${student.age} pesa ${student.pesa} kg`)

// Declarar uma variável do tipo array de nome students e atribua a ela nenhum valor, ou seja, 
//somente o array vazio
// Reatribua valor para a variável acima, colocando dentro dela o objeto student da questao 4. 

let students = [];
console.log(typeof students, students);

students = [student]
console.log(students)
console.log(students[0])

const sonic = {
    usuario: 'Sonic',
    age: 29,
    pesa: 20,
    subscribed: false
}

const taylor = {
    usuario: 'Taylor',
    age: 27,
    pesa: 19,
    subscribed: true
}

//Reatribuindo array com mais objeto
// 1 forma
students = [
    student,
    sonic
]
// ou
// 2 forma
students[2] = taylor;
console.log(students)



console.log(students)





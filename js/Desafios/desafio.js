/**
 * Transformar notas escolares
 * 
 * Crie um algoritmo que transforme as notas do sistema númerico
 * para sistema de notas em caracteres tipo A B C
 * 
 * * de 90 para cima - A
 * * entre 80 - 89 - B
 * * entre 70 - 79 - C
 * * entre 60 - 69 - D
 * * menor que 60 - F
 * 
 */


let score;
let resultado = 0;

function converter(score) {

    let scoreA =score >= 90 && score <= 100;
    let scoreB = score >= 80 && score <= 89;
    let scoreC = score >= 70 && score <= 79;
    let scoreD = score >= 60 && score <= 69
    let scoreE = score < 60 && score >= 0;

    if(scoreA) {
        return resultado = 'A';
    } else if(scoreB) {
        return resultado = 'B';
    } else if (scoreC) {
        return resultado = 'C';
    } else if (scoreD){
        return resultado = 'D'
    } else if (scoreE) {
        return resultado = 'F'
    } else {
        return `Nota inválida.`
    }
}

console.log(converter(90)) 
console.log(converter(79))
console.log(converter(75)) 
console.log(converter(69))
console.log(converter(71))
console.log(converter(40))
console.log(converter(64))
console.log(converter(-1))
console.log(converter('a'))





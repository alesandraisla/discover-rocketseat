/**
 * Estrutura de repeticao
 * 
 * for
 * break - para a execucao do loop
 * continue - pula a execucao do momento 
 */

for(let i = 10; i > 0; i--) {
    if( i === 5) {
        break;
    }
    console.log(i)
}


console.log('----------------------')

/**
 * while
 * é bom utilizar quando nao souber o tamanho 
 */

let i = 0;
while(i < 10) {
    console.log(i)
    i++;
}

/**
 * For...of
 * 
 */

let nome = 'Yuna';
let nomes = [ 'Lara', 'Tidus', 'Wakka'];

for(let char of nome) {
    console.log(char)
}

for(let name of nomes) {
    console.log(name)
}

/**
 * For...in
 * 
 * pega a propriedade do objeto
 */

let person = {
    nome: 'Zoe',
    idade: 15,
    weight: 45.7
}

for(let property in person) {
    console.log(property)
    console.log(person[nome])
    console.log(person.nome)
    console.log(person[property])
}
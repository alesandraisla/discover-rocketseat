const animais = ['Gato', 'Cachorro', 'Coelho', 'Papagaio'];

console.log(animais[0]);

//acessar tamanho
console.log(animais.length)

//iteravel
for(let animal of animais) {
    console.log(animal)
}

//adicionar elemento que
animais.push('Baleia')
console.log(animais)

//encontrar um elemento
const cachorro = animais.find(animal => animal === 'Cachorro')
console.log(cachorro)

//deletar
animais.splice(1, 1)
console.log(animais)



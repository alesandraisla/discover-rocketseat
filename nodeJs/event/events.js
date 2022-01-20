//Dispara eventos 

//Criar eventos 
const { EventEmitter } = require('events');
const evento = new EventEmitter();

//ouvir / ligado vai está ligada ao emit (ouvir varias vezes)
evento.on('Alguma coisa', (message) => {
    console.log('Eu ouvi voce:', message);
});

//ouvir uma unica 
evento.once('Alguma coisa', (message) => {
    console.log('Eu escuto apenas uma vez', message);
})


//Disparar eventos 
evento.emit('Alguma coisa', 'Computador');
evento.emit('Alguma coisa', 'Computador');
evento.emit('Alguma coisa', 'Computador');
evento.emit('Alguma coisa', 'Computador');




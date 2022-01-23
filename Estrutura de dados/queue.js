// Modelando
class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item){
        this.data.push(item)
        console.log(`${item} chegou na fila!`)
    }

    dequeue(){
        const item = this.data.shift() //tira o primeiro a sair da fila 
        console.log(`${item} saiu da fila`)
    }
}

// Utilizacao
const fila = new Queue();

fila.enqueue('Lara');
fila.enqueue('Vanessa');
fila.enqueue('Ariel')
fila.dequeue();
fila.dequeue();
fila.dequeue();

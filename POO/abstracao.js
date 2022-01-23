//definir
class Parafuso{
    constructor() {
        if(this.constructor === Parafuso)
            throw new Error("Classe abstrata não pode ser instanciada")
    }
    get tipo() {
        throw new Error('Método "get tipo()" precisa ser implementado')
    }
}

class Fenda extends Parafuso {
    constructor() {
        super()
    }
    get tipo() {
        return 'fenda'
    }
}

class Philips extends Parafuso {
    constructor() {
        super()
    }

    get tipo() {
        return 'Philips'
    }
}

class Allen extends Parafuso {}

//criar e usar
new Parafuso() // classe abstrata não pode ser instanciada
let fenda = new Fenda()
let philipso = new Philips()
let allen = new Allen()
console.log(fenda.tipo, philipso.tipo)
console.log(allen.tipo)
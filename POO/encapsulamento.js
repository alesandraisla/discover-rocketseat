class Poligono {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    get area() {
        return this.#calcularArea()
    }

    #calcularArea() {
        return this.altura * this.largura
    }
}

//Criar objeto 
let poligono = new Poligono(50, 30);
console.log(poligono);
console.log(poligono.area);
console.log(poligono.#calcularArea());


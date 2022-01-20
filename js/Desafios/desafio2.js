/**
 * 
 * Sistema de gastos familiar
 * 
 * Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
 *  receitas: []
 *  despesas: []
 * 
 * Agora, crie uma funcao que ira calcular o total de receitas e despesas e irá mostrar uma
 * mensagem se a familia está com saldo positivo ou negativo, seguido do valor do saldo
 */

let controleFamiliar = {
    receitas: [2500, 3200, 250.43, 360.45],
    despesas: [320.34, 128.45, 176.87, 1450.00,]
}

function soma(array) {
    let total = 0;
    for(let value of array) {
        total += value;
    }
    return total;
}

function sistemaDeGastos() {
    const calculoReceita = soma(controleFamiliar.receitas);
    const calculoDespesa = soma(controleFamiliar.despesas);
    const saldo = calculoReceita - calculoDespesa;
    
    const positivo = saldo >= 0;
    let resultado = `Negativo`;

    if(positivo) {
        resultado = `Positivo`;
    }

    console.log(`Seu saldo é ${resultado}: R$ ${saldo.toFixed(2)}`);
}

sistemaDeGastos()



/**
 * 
 * Celsius em fahrenheit
 * Crie uma funcao que receba uma string em 
 * celsius ou fahrenheit e faca a transformacao de uma unidade para outra.
 * 
 * C = (F- 32) * 5/9
 * 
 * F = C * 9/5 + 32
 */

function transform(degree) {
    const celsiusExists = degree.toUpperCase().includes('C');
    const fahrenheitExists = degree.toUpperCase().includes('F');

    // Fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado');
    }

    // Fluxo ideal, F --> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9;
    let degreeSign = 'C';

    // Fluxo Alternativo, C --> F
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius * 9/5 + 32;
        degreeSign = 'F';
    }

    return formula(updatedDegree) + degreeSign;

}


try {
    console.log(transform('50F'))
    console.log(transform('10C'))

    transform('50Z')
}catch(error) {
    console.log(error.message) //Não mostra o rastreamento
    console.log(error) // Mostra o rastreamento

}
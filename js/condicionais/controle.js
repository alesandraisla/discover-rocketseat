// control flow

// if...else
//Sempre que retornar true vai executar o bloco de codigo, caso contrario executara o bloco de
// codigo do else

let temperature = 36.5;
let highTemperature = temperature >= 37.5;
let mediumTemperatur = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre');
} else if(mediumTemperatur) {
    console.log('febre moderada');
} else {
    console.log('saudável')
}

// switch
//Vários caminhos

let expression = 'a';

switch(expression) {
    case 'a':
        // código
        console.log('A')
        break;
    case 'b':
        // codigo
        console.log('B')
        break;
    default:    // nao cumpriu nenhum caso vai pro default
        console.log('C')
        break; 
}

function calculator(number1, operator, number2) {
    let result = 0;

    switch(operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-' :
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            console.log('Não implementado');
            break;
    }
    return result
}

console.log(calculator(4, '+', 8))

/**
 * 
 * throw
 * Disparar / lancar
 * Deve criar com o operador new ( Criar um objeto)
 * Ele para o que vem depois dele na function, por isso é importante usar o try e catch 
 * para que continue a aplicacao
 */
function inserirNome(nome = '') {
    if(nome === ''){
        throw 'Nome é obrigatório';
    }
    console.log('Nunca chegará aqui!!!')
}
/**
 * 
 * try...catch (Tentar ... Pegar)
 */

try {
    inserirNome('')
} catch(e) {
    console.log(e)
}
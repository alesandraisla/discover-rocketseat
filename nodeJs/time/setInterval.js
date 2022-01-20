// como se fosse um fiscal de loja
// setInterval irá rodar uma funcao N vezes
// depois de x milissegundos 
// intervalo de tempo que vai rodar a funcao pra sempre 


const timeOut = 2000;
const checking = () => {
    console.log('Checando agora.')
}

setInterval(checking, timeOut);
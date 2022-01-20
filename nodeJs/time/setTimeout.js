// setTimeout rodar uma funcao depois de X milissegundos

const timeOut = 3000;

const finished = () => console.log('feito!'); 


//funcao callback o finished, pq depois de 3 segundos ela vai ser chamada de volta 
setTimeout(finished, timeOut);
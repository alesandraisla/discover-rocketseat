// clearTimeout cancela um timeOut 
let timeOut = 3000;
let feito = () => console.log('done!');
let timer = setTimeout(() =>feito, timeOut);

clearTimeout(timer);






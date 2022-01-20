// clearInterval irá cancelar um setInterval registrado
const timeOut = 1000;
const checar = () => console.log('Chegando agora!')

let interval = setInterval(checar, timeOut);

// clearInterval(interval);

setTimeout(() => clearInterval(interval), 4000)
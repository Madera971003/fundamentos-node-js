// const p = require('process');

process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
});

process.on('exit', () => {
    console.log('Ale, el proceso acabó');
    setTimeout(() => {
        // Aunque se le ponga un valor de cero no se ejecuta, porque se manda a otro hilo y el proceso ya terminó
        // En resumen lo sincrono en el exit ya no se hará
        console.log('Esto no se va a ver nunca');
    }, 0);
    console.log('Esto tambien se muestra')
});

setTimeout(() => {
    // En cambio esto si se ve, porque aún entro el los hilos de ejecucion actuales
    console.log('Esto se va a ver');
}, 0);

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error');
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    }, 0);
});


funcionQueNoExiste();

console.log('Esto si el error no se recoje, no sale');

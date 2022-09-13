const bcrypt = require('bcrypt');
// https://www.npmjs.com/package/bcrypt
// bcrypt es un modulo usado cuando se trata de cuestiones de seguridad

const password = '1234Segura!';

// El num 5 es el numero de veces que se ejecutara el algoritmo para crear la contraseña en base a la original
bcrypt.hash(password, 5, function(err, hash) {
    console.log(hash); 

    bcrypt.compare(password, hash, function(err, res) { //Esto no da true porque el hash generado coincide con el dato mandado
        // console.log(err)
        console.log(res)
    })

    bcrypt.compare('password', hash, function(err, res) { //Aqui da false porque el string mandado para verificar es diferente al hash que se genero
        // console.log(err)
        console.log(res)
    })
});

// Traer nuestro modulo
//Aqui se usa de esta manera porque no es un modulo que este dentro dek core
//Ademas este es un modulo creado por nosotros mismos
const modulo = require('./modulo');

// ejecutar una funcion del modulo
console.log(modulo.prop1);
modulo.saludar();
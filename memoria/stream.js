const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8'); //Esto es para que acepte tildes y ñ

readableStream.on('data', function (chunk) {
    data += chunk; //este es usado cuando los datos son muy grandes; se van agregando los chunks conforme se descargan
});

readableStream.on('end', function() {
    console.log(data);
});


// Con lo siguiente nosotros ecribimos en el buffer de salida del sistema
process.stdout.write('hola')
process.stdout.write('que')
process.stdout.write('tal')


// Esto nos crea un stream de tranformacion
const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);
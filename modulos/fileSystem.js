const fs = require('fs') //File System
// https://nodejs.org/docs/latest-v15.x/api/fs.html

function leer(ruta, callback) {
  fs.readFile(ruta, (error, data) => {
    // Sin toString() lo va a mostrar como un Buffer
    callback(console.log(data.toString()))
  })
}

function escribir(ruta, contenido, callback) {
  fs.writeFile(ruta, contenido, (error) => {
    if (error) {
      callback(console.log('No he podido escribirlo', error))
    } else {
      callback(console.log('Se ha escrito correctamente'))
    }
  })
}

function borrar(ruta, callback) {
  fs.unlink(ruta, callback)
}

// __dirname toma la ruta actual
leer(__dirname + '/archivo.txt', console.log)

escribir(__dirname + '/otroArchivo.txt', 'Este es un contenido extra', console.log)

borrar(__dirname + '/otroArchivo.txt', console.log)
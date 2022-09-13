function saludo(nombre, callback) {
  // console.log('Hola, soy asincrona')
  setTimeout(() => {
    console.log('Hola ' + nombre)
    callback(nombre)
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log('Bla bla bla')
    callbackHablar()
  }, 1000)
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log('Adios ' + nombre)
    otroCallback()
  }, 1500);
}

// Para evitar el Callbacks hell, conviene refactrizar el código creando bloques de codigos mas especificos para tener codigo mas entendible

// console.log('Iniciando el proceso...')
// saludo('Abi', (nombre) => {
//   hablar( () =>
//     hablar( () =>
//       hablar( () =>
//         hablar( () =>
//           hablar( () =>
//             hablar( () =>
//               adios(nombre, () => console.log('Ejecutando el otroCallback y terminando el proceso...'))
//             )
//           )
//         )
//       )
//     )
//   );
// })
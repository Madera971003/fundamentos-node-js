// function soyAsincrona(callback) {
//   console.log('Hola, soy asincrona')
//   setTimeout(() => {
//     console.log('Estoy siendo asincrona')
//     callback()
//   }, 1000);
// }

// console.log('Iniciando el proceso...')
// soyAsincrona(() => console.log('Ejecutando el Callback y terminando el proceso...'))

function saludo(nombre, callback) {
  // console.log('Hola, soy asincrona')
  setTimeout(() => {
    console.log('Hola ' + nombre)
    callback(nombre)
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log('Adios ' + nombre)
    otroCallback()
  }, 1500);
}

console.log('Iniciando el proceso...')
saludo('Abi', (nombre) => {
  adios(nombre, () => console.log('Ejecutando el otroCallback y terminando el proceso...'))
})
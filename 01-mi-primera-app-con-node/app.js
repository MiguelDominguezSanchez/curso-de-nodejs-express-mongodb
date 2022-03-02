// const frutas = require('./frutas')
const { frutas, precios } = require('./frutas')

// const frutas = ['🍉 ', '🍓 ', '🍒 ']
frutas.forEach((item) => console.log(item))
console.log(precios)

// Some differences
// fetch cant be used, fetch API, is external, executed in the browser
// fetch()
// document cant be used, it does not exit
// document.getElementById()

console.log('hice unos cambios')

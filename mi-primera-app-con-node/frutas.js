const frutas = ['🍉 ', '🍓 ', '🍒', '🍏']

// module.exports = frutas
// const feria = ['🍉 ', '🍓 ', '🍒 ']
const precios = [100, 200]

// module.exports = feria

// Export more than one thing
module.exports = {
	// redundant key & value identical can be synthesized
	frutas: frutas,
	precios,
}

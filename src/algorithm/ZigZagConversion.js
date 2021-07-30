const matrixToNodes = (matrix) => {
	const nodes = {}
	for (let col = 0; col < matrix[0].length; col++) {
		for (let row = 0; row < matrix.length; row++) {
			if (matrix[row][col] === '') continue
			nodes[`${row},${col}`] = { letter: matrix[row][col] }
		}
	}
	return nodes
}

export const stringToNodes = (string, numberOfRows, numOfColumn) => {
	const matrix = []

	for (let i = 0; i < numberOfRows; i++) matrix.push(new Array(numOfColumn).fill(''))

	let state = 0
	let row = 0
	let col = 0
	for (let letter of string) {
		matrix[row][col] = letter
		if (!state && row === matrix.length - 1) {
			state = 1
			row--
			col++
			continue
		}
		if (!state && row < matrix.length - 1) {
			row++
			continue
		}
		if (state && row === 0) {
			state = 0
			row++
			continue
		}
		if (state && row > 0) {
			row--
			col++
			continue
		}
	}
	return matrixToNodes(matrix)
}

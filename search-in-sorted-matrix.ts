function searchInSortedMatrix(matrix, target) {
	let col = null;
	let row = null;
  for(let i = 0; i < matrix.length; i++) {
		for(let m = 0; m < matrix[i].length; m++) {
			if(target === matrix[i][m]) {
				row = i
				col = m
			}
		}
	}
	if((col || row) === null) {
		return [-1, -1]
	}
	return [row, col]
}
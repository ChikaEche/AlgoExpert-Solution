function kadanesAlgorithm(array) {
	let sumArray = []
  for (let i = 0; i < array.length; i++) {
		let sum = 0;
		sum += array[i]
		sumArray.push(sum)
		for (let j = i+1; j < array.length; j++) {
			sum +=  array[j]
			sumArray.push(sum)
		}
	}
	return Math.max(...sumArray)
}
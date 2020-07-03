function twoNumberSum(array, targetSum) {
	let result = []
  for(let i = 0; i < array.length; i++) {
		for(let k = i + 1; k < array.length; k++) {
			if(array[i] + array[k] === targetSum) {
				result.push(array[i],array[k])
			}
		}
	}
	return result;
}

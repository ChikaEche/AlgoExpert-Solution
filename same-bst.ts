function sameBsts(arrayOne, arrayTwo) {
	if(arrayOne.length !== arrayTwo.length) return false;
	if(arrayOne[0] !== arrayTwo[0]) return false;
	if(arrayOne.length === 0 && arrayOne.length === 0) return true;
	
	let arrayOneSmaller = getSmaller(arrayOne);
	let arrayOneBigger = getBigger(arrayOne);
	let arrayTwoSmaller = getSmaller(arrayTwo);
	let arrayTwoBigger = getBigger(arrayTwo);
	
	return sameBsts(arrayOneSmaller, arrayTwoSmaller) && sameBsts(arrayOneBigger, arrayTwoBigger) 
}

function getSmaller(array) {
	let smaller = []
	for (let i = 1; i < array.length; i++) {
		if(array[0] > array[i]) {
			smaller.push(array[i])
		}
	}
	return smaller;
}

function getBigger(array) {
	let bigger = []
	for (let i = 1; i < array.length; i++) {
		if(array[0] <= array[i]) {
			bigger.push(array[i])
		}
	}
	return bigger;
}
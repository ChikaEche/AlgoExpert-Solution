function getPermutations(array) {
	let permutation = []
	for(let i = 0; i < array.length; i++) {
  	for(let k = i + 1; k < array.length; k++) {
    	for(let j = k + 1; j < array.length; j++) {
      	permutation.push([array[i], array[k], array[j]].sort((a,b) => a - b))
    	}
  	}
	}
	return permutation;
}

function arrayEquality(arr1, arr2) {
	return arr1.map(x => arr2.includes(x)).includes(false)
}

function uniqueArray(array) {
	let nonRep = [array[0]]
	for(const element of array) {
  	let check = true;
  	for(const elem of nonRep) {
    	let arrayCheck = arrayEquality(elem, element)
    	if(arrayCheck === false) {
      	check = false;
      	break;
    	}
  	}
  	if(check) {
    	nonRep.push(element)
  	}
	}
	return nonRep;
}
function getMatchingArray(array, target) {
	return array.filter(x => x.reduce((a,b) => a+b, 0) === target)
}
function arraySort(array) {
	for(let i = array.length - 1; i >=0; i--) {
		array.sort((a,b) => a[i] - b[i]);
	}
	return array;
}

function threeNumberSum(array, targetSum) {
  let permutation = getPermutations(array);
	let uniqueArra = uniqueArray(permutation);
	let matchingArray = getMatchingArray(uniqueArra, targetSum);
	let sortedArray = arraySort(matchingArray)
	return sortedArray;
}
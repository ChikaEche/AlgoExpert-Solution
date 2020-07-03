function isValidSubsequence(array, sequence) {
	let check = true;
	let index = []
  for(let i = 0; i < sequence.length; i++) {
		if(array.indexOf(sequence[i]) === -1) {
			check = false;
			break;
		}
    else {
      index.push(array.indexOf(sequence[i]))
      array[array.indexOf(sequence[i])] = Infinity
    }
    for(let k = 1; k < index.length; k++) {
      if(index[k-1] > index[k]) {
        check = false
      }
    }
	}
	return check;
}

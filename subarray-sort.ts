function subarraySort(array) {
	let indx = []
	let highest = -1
	let smallest = -1
  for (let i = array.length - 1; i > 0; i--) {
		if(array[i] < array[i-1]) {
			highest = highestIndex(array, i-1, array[i-1]);
			smallest = smallestIndex(array, i, array[i])
			break;
		}
	}
	indx.push(smallest, highest)
	return indx
}
	
	function smallestIndex(array, smallest, value) {
		for (let i = smallest; i >= 0; i--) {
      console.log(array[i], array[i-1], i)
			if(array[i] > value ) {
        let temp = array[i]
        array[i] = array[smallest]
        array[smallest] = temp
        smallest = i
			}
      else {
        value = array[i]
      }
		}
		return smallest;
	}
	
		function highestIndex(array, highest, value) {

		let highidx = highest
		for (let i = highest+1; i < array.length; i++) {
			if(array[i] > value) {
				highest = i-1
        break;
			}
		}
		return highest === highidx ? array.length - 1 : highest;
	}


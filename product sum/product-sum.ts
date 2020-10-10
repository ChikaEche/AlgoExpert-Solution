function productSum(array) {
	let sumArray = [];
	let depth = 1;
	let sum = (array, depth) => {
		for (let i = 0; i < array.length; i++) {
			if(Array.isArray(array[i])) {
				++depth;
				sum(array[i], depth);
				--depth;
			}
			else {
				let element = array[i];
				for(let k = depth; k > 0; k--) {
					element = element * k
				}
				sumArray.push(element)
			}
		}
	}
	sum(array, depth);
	return sumArray.reduce((a,b) => a+b);
}
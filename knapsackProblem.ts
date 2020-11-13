function knapsackProblem(items, capacity) {
	let knapSackContainer = [];
	for(let i = 0; i < items.length+1; i++) {
		let row = new Array(capacity+1).fill(0);
		knapSackContainer.push(row)
	}
	
	for(let i = 1; i < items.length + 1; i++) {
		const currentWeight = items[i-1][1];
		const currentValue = items[i-1][0];
		for(let k = 0; k < capacity + 1; k++) {
			if(currentWeight > k) {
				knapSackContainer[i][k] = knapSackContainer[i-1][k]
			}
			else {
				const weightWhenAdded = knapSackContainer[i-1][k - currentWeight] + currentValue;
				knapSackContainer[i][k] = Math.max(weightWhenAdded, knapSackContainer[i-1][k])
			}
		}
	}
	const lastColValue = knapSackContainer[knapSackContainer.length - 1].length - 1;
	console.log(knapSackContainer)
  return [ knapSackContainer[items.length][capacity] , getIndex(items, knapSackContainer)];
}

function getIndex(items, knapSackContainer) {
	let currentIndexRow = knapSackContainer.length - 1; 
	let currentIndexColumn = knapSackContainer[currentIndexRow].length - 1;
	let currentValue = knapSackContainer[currentIndexRow][currentIndexColumn];
	let indexes = [];
	while(currentIndexRow > 0) {
		if(knapSackContainer[currentIndexRow][currentIndexColumn] > knapSackContainer[currentIndexRow - 1][currentIndexColumn]) {
			indexes.unshift(currentIndexRow - 1);
			currentIndexColumn = currentIndexColumn - items[currentIndexRow - 1][1]
			--currentIndexRow;
		}
		else if(knapSackContainer[currentIndexRow][currentIndexColumn] === knapSackContainer[currentIndexRow - 1][currentIndexColumn]) {
			--currentIndexRow;
		}
		
		if(currentIndexColumn=== 0) break;
	}
	return indexes;
}
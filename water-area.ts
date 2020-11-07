function waterArea(heights) {
	let waterLevel = 0;
	for(let i = 0; i < heights.length; i++) {
		let leftMaxHeight = Math.max(...heights.slice(0,i))
		let rightMaxHeight = Math.max(...heights.slice(i+1, heights.length))
    let height = Math.min(leftMaxHeight, rightMaxHeight);
    if(height - heights[i] > 0) {
      height = height - heights[i]
    }
    else {
      height = 0;
    }
		waterLevel = waterLevel + height
	}
	return waterLevel
}
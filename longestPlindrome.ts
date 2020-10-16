function longestPalindromicSubstring(string) {
	let stringArray = string.split('')
	let longestPalString = ''
	let longestPal = []
  for(let i = 0; i < stringArray.length; i++) {
		let starting = stringArray[i]
		longestPal.push(starting)
		for(let m = i+1; m < stringArray.length; m++) {
			starting = starting + stringArray[m]
			if(starting === (starting.split('').reverse().join(''))) {
					 longestPal.push(starting)
			}
		}
	}
	longestPalString = longestPal[0]
	for(let k = 1; k < longestPal.length; k++) {
		if(longestPalString.length < longestPal[k].length) {
			longestPalString = longestPal[k]
		}
	}
	return longestPalString
}
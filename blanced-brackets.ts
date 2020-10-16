function balancedBrackets(strings) {
    let openingBrackets = ['[','(', '{']
    let closingBrackets = [']', ')', '}']
    let stringArray = strings.split('')
    let pending = [];
    for(let i = 0; i < strings.length; i++) {
      if(i === 0 && (closingBrackets.indexOf(stringArray[i]) > -1)) {
        return false;
      }
      if(openingBrackets.indexOf(stringArray[i]) > -1) {
              const ind = openingBrackets.indexOf(stringArray[i])
              if(stringArray[i+1] && closingBrackets.indexOf(stringArray[i+1]) > -1) {
                  if(closingBrackets.indexOf(stringArray[i+1]) !== ind) {
                      return false;
                  }
              }
        pending.push(stringArray[i])
      }
      if(closingBrackets.indexOf(stringArray[i]) > -1) {
        const index = closingBrackets.indexOf(stringArray[i])
        const bracket = openingBrackets[index]
        if(pending.indexOf(bracket) > -1) {
          pending[pending.indexOf(bracket)] = null
        }
        else {
          return false
        }
      }
    }
      
      for (let n = 0; n < pending.length; n++) {
          if(pending[n] !== null) {
              return false;
          }
      }
    return true;
  }
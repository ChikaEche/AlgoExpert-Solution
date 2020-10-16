function groupAnagrams(words) {
    let anagram = []
      let visited = []
        let contains = false
      for (let i = 0; i < words.length; i++ ) {
            let splitWord = words[i].split('')
            let temp = [...splitWord]
            if(visited.indexOf(i) === -1) {
          anagram.push([words[i]])
            for(let m = i+1; m < words.length; m++) {
                let checkWord = words[m].split('')
                splitWord = [...temp]
             // console.log(checkWord)
                for(let k = 0; k < checkWord.length; k++) {
            if(checkWord.length !== splitWord.length) {
              break;
            }
                    if(splitWord.indexOf(checkWord[k]) > -1) {
                        const index = splitWord.indexOf(checkWord[k])
                        splitWord[index] = null
                        contains = true															
                    }
                    else {
              contains = false
                        break;
                    }
            if(contains && (k === checkWord.length - 1)) {
                    anagram[anagram.length - 1].push(words[m])
            visited.push(m)
                }
                }
            }
        }
        }
      //console.log(anagram)
      let ana = []
      for(let z = 0; z < anagram.length; z++) {
        ana.push([])
        for(let b = 0; b < anagram[z].length; b++) {
          if(ana[z].indexOf(anagram[z][b]) === -1) {
                  console.log(ana)
            ana[z].push(anagram[z][b])
            //console.log(anagram[z][b], ana[z],z)
          }
        }
      }
        return ana;
    }
    
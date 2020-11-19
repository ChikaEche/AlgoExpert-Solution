function numbersInPi(pi, numbers) {
    let numberMap = {};
      numbers.forEach((number, idx) => numberMap[number] = idx);
      let minSpaces = getMinSpaces(pi, numberMap, {}, 0);
      return minSpaces === Infinity ? -1 : minSpaces;
  }
  
  function getMinSpaces(pi, numberMap, cache, index) {
      if(index === pi.length) return -1;
      if(index in cache) return cache[index];
      let minSpaces = Infinity;
      for(let i = index; i < pi.length; i++) {
          const slicedPi = pi.slice(index, i+1);
          if(slicedPi in numberMap) {
              const minSpacesSuffix = getMinSpaces(pi, numberMap, cache, i+1);
              minSpaces = Math.min(minSpaces, minSpacesSuffix + 1);
          }
      }
      cache[index] = minSpaces;
      return minSpaces;
  }
function dijkstrasAlgorithm(start, edges) {
    let distances = [];
    edges.map(x => distances.push(Infinity));
    let queue = [];
    let visited = {}
    queue.push(start)
    distances[start] = 0
    visited[edges[start]] = true;
    while(queue.length) {
      let currentNode = queue.shift();
      for(let i = 0; i < edges[currentNode].length; i++) {
        let calculatedDistance = distances[currentNode] + edges[currentNode][i][1]
        if(calculatedDistance < distances[edges[currentNode][i][0]] ) {
          distances[edges[currentNode][i][0]] = calculatedDistance
        }
        if(visited[edges[currentNode][i][0]] === undefined) {
          queue.push(edges[currentNode][i][0])
          visited[edges[currentNode][i][0]] = true;
        }
      }
    }
      for(let i = 0; i < distances.length; i++) {
          if(distances[i] === Infinity) distances[i] = -1;
      }
      
    return distances
  }
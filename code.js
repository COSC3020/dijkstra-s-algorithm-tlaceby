// - initialize the dist to each vertex to $\infty$, source to 0
// - while there are unmarked vertices left in the graph
//     - select the unmarked vertex $v$ with the lowest dist
//     - mark $v$ with distance dist
//     - for each edge $(v,w)$
//         - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

/**
 * @param {number[][]} graph
 * @param {number} start
 */
function dijkstra(graph, start) {
  // initialize the dist to each vertex to $\infty$, source to 0
  let distances = new Array(graph.length).fill(Infinity);
  let visited = new Set();
  distances[start] = 0;

  // while there are unmarked vertices left in the graph
  while (visited.size < graph.length) {
    //  select the unmarked vertex $v$ with the lowest dist
    let [minDistance, closestNode] = distances.reduce(
      ([min, minIdx], distance, idx) =>
        !visited.has(idx) && distance < min ? [distance, idx] : [min, minIdx],
      [Infinity, null]
    );

    // Remaining nodes are unreachable/
    if (minDistance === Infinity) break;
    visited.add(closestNode);

    for (let [neighbor, weight] of graph[closestNode]) {
      if (!visited.has(neighbor)) {
        let newDistance = distances[closestNode] + weight;
        if (newDistance < distances[neighbor]) {
          distances[neighbor] = newDistance;
        }
      }
    }
  }

  return distances;
}

module.exports = {
  dijkstra,
};

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/2Wy-Iis-)

# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:

- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
  - select the unmarked vertex $v$ with the lowest dist
  - mark $v$ with distance dist
  - for each edge $(v,w)$
    - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

**Summary**:
The time complexity of dijkstras algorithm is $\Theta(V^2 + E)$, where $V$ is the number of vertices and $E$ is the number of edges.

Initializing the **distances** array and the **visited** set takes $\Theta(V)$ time. This is because we need to fill the array with **Infinity** values foreach verticy.

1. The main while loop runs until all vertices are visited, which takes at most $V$ iterations.

2. Finding the unvisited node with the smallest distance using reduce takes $\Theta(V)$ time in the worst case, as we need to iterate over all the distances.

3. Adding the closest node to the visited set takes $\Theta(1)$ time.
4. The inner for loop iterates over the neighboring nodes of the current node. In the worst case, each node can have up to $V-1$ neighbors, so the total number of iterations across all nodes is $\Theta(E)$.

5. Updating the distance of a neighboring node takes $\Theta(1)$ time.

Therefore, the overall time complexity of the algorithm is determined by the while loop and the operations inside it. The dominant terms are:

- $\Theta(V)$ for the while loop iterations.
- $\Theta(V)$ for finding the unvisited node with the smallest distance using `reduce()`.
- $\Theta(E)$ for iterating over the neighboring nodes across all iterations.

Since we loop over all verticies and can perform another $V$ iterations during the reduce method, we will have an quadratic runtime of $V^2$. In conclusion the overall runtime complexity of my implimentation of dijkstras algorithm is $\Theta(V^2 + E)$.

## Resources

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

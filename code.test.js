const { dijkstra } = require("./code");
const { deepStrictEqual } = require("assert");

const graph1 = [
  [
    [1, 1],
    [2, 4],
  ],
  [
    [0, 1],
    [2, 2],
    [3, 5],
  ],
  [
    [0, 4],
    [1, 2],
    [3, 1],
  ],
  [
    [1, 5],
    [2, 1],
  ],
];

console.log("Test case 1:");
const result1 = dijkstra(graph1, 0);
const expected1 = [0, 1, 3, 4];
deepStrictEqual(result1, expected1);
console.log("Passed!\n");

console.log("Test case 2:");
const result2 = dijkstra(graph1, 1);
const expected2 = [1, 0, 2, 3];
deepStrictEqual(result2, expected2);
console.log("Passed!\n");

console.log("Test case 3:");
const smallGraph1 = [
  [
    [1, 2],
    [2, 5],
  ],
  [
    [0, 2],
    [2, 1],
  ],
  [
    [0, 5],
    [1, 1],
  ],
];
const result3 = dijkstra(smallGraph1, 0);
const expected3 = [0, 2, 3];
deepStrictEqual(result3, expected3);
console.log("Passed!\n");

console.log("Test case 4:");
const smallGraph2 = [
  [[1, 3]],
  [
    [0, 3],
    [2, 1],
  ],
  [[1, 1]],
];
const result4 = dijkstra(smallGraph2, 1);
const expected4 = [3, 0, 1];
deepStrictEqual(result4, expected4);
console.log("Passed!\n");

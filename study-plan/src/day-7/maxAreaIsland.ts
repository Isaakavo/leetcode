/* You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.)
You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

Example 1:
  Input: grid = [
    [0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]
  ]
  Output: 6
  Explanation: The answer is not 11, because the island must be connected 4-directionally.

Example 2:
  Input: grid = [[0,0,0,0,0,0,0,0]]
  Output: 0
 

Constraints:
  m == grid.length
  n == grid[i].length
  1 <= m, n <= 50
  grid[i][j] is either 0 or 1. */

function dfsII(
  island: number[][],
  r: number,
  c: number,
  seen: boolean[][]
): number {
  if (
    r < 0 ||
    r >= island.length ||
    c < 0 ||
    c >= island[0].length ||
    seen[r][c] ||
    island[r][c] === 0
  ) {
    return 0;
  }
  seen[r][c] = true;
  return (
    1 +
    dfsII(island, r + 1, c, seen) +
    dfsII(island, r - 1, c, seen) +
    dfsII(island, r, c + 1, seen) +
    dfsII(island, r, c - 1, seen)
  );
}

function maxAreaOfIsland(grid: number[][]): number {
  const seen = [];
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    seen[i] = []
    for (let j = 0; j < grid[0].length; j++) {
      seen[i][j] = false;
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      result = Math.max(result, dfsII(grid, i, j, seen));
    }
  }

  return result;
}

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);

console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]));

console.log(
  maxAreaOfIsland([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
  ])
);

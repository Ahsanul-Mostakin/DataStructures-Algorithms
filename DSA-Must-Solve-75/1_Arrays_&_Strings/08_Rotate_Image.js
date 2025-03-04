/* 
8. Rotate Image (Matrix Rotation)
Problem: Given an `n x n` 2D matrix, rotate it 90 degrees clockwise in-place.
*/
function rotateBrute(matrix) {
  const n = matrix.length;
  const rotated = Array(n)
    .fill()
    .map(() => Array(n));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotated[j][n - 1 - i] = matrix[i][j];
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = rotated[i][j];
    }
  }
}
// Optimal
function rotate(matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}
let matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(matrix1);
rotate(matrix2);
console.log(matrix1);
console.log(matrix2);

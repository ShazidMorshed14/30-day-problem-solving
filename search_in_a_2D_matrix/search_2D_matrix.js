var searchMatrix = function (matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midVal = matrix[Math.floor(mid / cols)][mid % cols];

    if (target === midVal) return true;

    if (target < midVal) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

const target = 3;

const result = searchMatrix(matrix, target);
console.log(result);

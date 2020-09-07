
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let res = [];
  let k = 0;

  if (!matrix) {
    return [];
  }

  matrix.forEach(arr => {
    if (k % 2 === 0) {
      res.push(...arr)
    } else {
      res.push(...arr.reverse())
    }
    k++;
  });

  return res;
}

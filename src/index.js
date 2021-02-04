module.exports = function towelSort(matrix) {
    return matrix
        ? (matrix = matrix.reduce(
              (sum, array, index) =>
                  !(index % 2)
                      ? sum.concat(array)
                      : sum.concat(array.reverse()),
              []
          ))
        : (matrix = []);
};

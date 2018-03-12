module.exports = function solveSudoku(matrix) {
  // your solution
    function test(row,col) {
    var r = [];
    var object = {
        row: Math.floor(row/3)*3,
        col: Math.floor(col/3)*3,
    };

    for (var i = 0; i < 9; i++) {
        r.push([matrix[row][i], matrix[i][col], matrix[object.row + i % 3][object.col + Math.floor(i / 3)]])
    }
    return r;
}

  for (var row = 0; row < 9; row++) {
    for (var col = 0; col < 9; col++) {
        if (matrix[row][col] === 0) {
          var b = test(row, col);
            for (var c of b) {
                matrix[row][col] = c;
            }
        }
    }
}
return matrix;
}

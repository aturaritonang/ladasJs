function diagonalDifference(arr2D){
    var nil1 = 0;
    var nil2 = 0;
    for (let row = 0; row < arr2D.length; row++) {
        for (let col = 0; col < arr2D[row].length; col++) {
            if (row == col) {
                nil1 += arr2D[row][col];
            }
            if (row+col == arr2D.length - 1) {
                nil2 += arr2D[row][col];
            }
        }
    }
    console.table(arr2D);
    console.log(`Niali 1: ${nil1}, Nilai 2: ${nil2}`);
    console.log(`Hasil : ${Math.abs(nil1 - nil2)}`);
}
function soal0203(n) {
    var arr = new Array(n);
    for (let I = 0; I < n; I++) {
        arr[I] = new Array(n);
    }
    
    var arrPrime = prime(((n * n) + n) / 2);
    console.log(arrPrime);
    var pos = 0;
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (row >= col) {
                arr[row][col] = arrPrime[pos];
                pos++;
            }
        }
    }
    console.table(arr);
    arrayToTable(arr);
}
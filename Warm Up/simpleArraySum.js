function simpleArraySum(arr) {
    // input parameter adalah array
    var jumlah = 0;
    for (let I = 0; I < arr.length; I++) {
        jumlah += arr[I];
    }
    console.log(`Input adalah : ${arr}`);
    console.log(`Output adalah : ${jumlah}`);
}
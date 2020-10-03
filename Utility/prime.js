function prime(n){
    var arr = [];
    var val = 2;
    arr.push(val);
    while (arr.length < n) {
        val++;
        var bilPrime = true;
        for(let I = 0; I < arr.length; I++){
            if (val % arr[I] == 0) {
                bilPrime = false;
                break;
            }
        }

        if (bilPrime) {
            arr.push(val);
        }
    }
    return arr;
}
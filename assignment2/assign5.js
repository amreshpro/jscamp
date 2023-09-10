let number = 35


function isPrimeNumber(num) {
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false
    }
    return true

}

function printAllPrimeNumberUptoN(n){
    for(let i =2;i<n;i++) {
        if(n===1) break;
        if (isPrimeNumber(i)) {
            console.log(i)
        }
    }

}



printAllPrimeNumberUptoN(number)

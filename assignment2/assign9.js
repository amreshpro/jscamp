// fibonacci

function fibonacciSeries(n) {
    
    let f1 = 0, f2 = 1;
    let nextF = f1 + f2;
    console.log(f1)
    console.log(f2)
    for (let i = 3; i <= n; i++) {
        console.log(nextF)
        f1 = f2;
        f2 = nextF;
        nextF = f1 + f2

    }

}

fibonacciSeries(5) // 0 1 1 2 3
console.log()
fibonacciSeries(15) // 0 1 1 2 3 5,8,13,21,34,55,89,144,233,377

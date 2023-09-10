
let n = 5

function findFactorial(num) {

    if (num === 0) return 1;
    let fact = 1;
    for (let i = 1; i <=num; i++) {
        fact = fact * i;
    }
    return fact;
}



const result = findFactorial(n)//5->120

console.log(result)//120
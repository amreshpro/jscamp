
let n = 9;

function checkNumber(num){
    if(n==0) return "zero"
    if(n>0) return "positive"
    if(n<0) return "negative"
}

const result = checkNumber(n);
console.log(`Entered Number is ${result}`)
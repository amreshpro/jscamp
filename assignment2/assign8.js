//perfect Square or not - 6, 28, 496, 8128
// 28 ---> 1,2,4,7,14,   28(exclude)
// 1+2+4+7+14 =28 


function isPerfectNumber(num){
let factorSum = 0;
for(let i = 1;i<num;i++){
    if(num%i===0) factorSum +=i;
}

if(factorSum === num) return true;

return false;


}


console.log(isPerfectNumber(28)) //true
console.log(isPerfectNumber(128)) // false
console.log(isPerfectNumber(496)) //true

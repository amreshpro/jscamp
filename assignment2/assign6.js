

function calculator(a,b,operator){
    if(operator=='+') return a+b;
    if(operator=='-') return a-b;
    if(operator=='*') return a*b;
    if(operator=='/') return a/b;
    if(operator=='%') return a%b;
    
}

console.log(calculator(2,3,'*'))//6
console.log(calculator(2,3,'+'))//5
console.log(calculator(2,3,'-'))//-1
console.log(calculator(2,3,'/'))//0.6666666666
console.log(calculator(10,3,'%'))// 1


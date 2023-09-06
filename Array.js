
// 1
let fruits = []  //empty array
console.log(fruits) //[]

// 2.
// let fruits = [] //empty array
  fruits.push("apple")
  fruits.push("banana")
  fruits.push("orange")
//   fruits.push("apple","banana","orange")
  console.log(fruits); // ["apple","banana","orange"] 

// 3.
fruits.splice(0,1) // splice(index,how many from that index is deleted)
console.log(fruits)//[ 'banana', 'orange' ]

// 4.
fruits.push("grape") 
console.log(fruits) //[ 'banana', 'orange', 'grape' ]

// 5.
fruits.splice(1,1,"pear"); //splice(index,howmany,what add in that place)
console.log(fruits) //[ 'banana', 'pear', 'grape' ]

//6. Final Array
console.log(fruits);//[ 'banana', 'pear', 'grape' ]

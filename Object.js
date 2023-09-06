
// 1.
let person = {} //empty object
console.log(person)//{}

// 2.
// way-1
person.name = "John"
person.age=30
person.city= "New York" 

//way-2
// person={
//     name:"John",
//     age:30,
//     city:"New York"
// }

console.log(person)//{ name: 'John', age: 30, city: 'New York' }


// 3.
delete person.age //delete the age property from person
console.log(person) //{ name: 'John', city: 'New York' }



// 4.
person.job = "Engineer"
console.log(person) //{ name: 'John', city: 'New York', job: 'Engineer' }


// 5.
person.city = "San Francisco"
console.log(person)//{ name: 'John', city: 'San Francisco', job: 'Engineer' }


// 6.
console.log(person) //{ name: 'John', city: 'San Francisco', job: 'Engineer' }
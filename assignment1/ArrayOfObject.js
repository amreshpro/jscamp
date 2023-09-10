
// 1.
let cars = [] //empty array


// 2.
cars.push({
    make: "Toyota",
    model: "Camry",
    year: 2018
},
{
    make: "Toyota",
    model: "Camry",
    year: 2018
},{
    make: "Toyota",
    model: "Camry",
    year: 2018
}
)

console.log(cars)


// 3.
cars.splice(0,1)//delete the first car object
console.log(cars)



// 4.
cars.push({
    make:"Honda",
    model:"Civic",
    year:2020
})
console.log(cars)

// 5.
cars[1].model ="Accord"//update model at 2nd car
console.log(cars)

// 6.
console.log(cars)
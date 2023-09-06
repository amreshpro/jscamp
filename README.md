## Assignment-1

  ```index.html ```
  !["html"](screenshots/html.png)

  ## Array Operation

  ### 1. Create an empty array called "fruit"
  
  ```js
    let fruits = [] //empty array
    console.log(fruits)//[]
  ```

  ### 2. Add the following fruit to the "fruits" array: "apple", "banana", "orange".

  ```js
  //way-1
  fruits.push("apple")
  fruits.push("banana")
  fruits.push("orange")
  //way-2
  //fruits.push("apple","banana","orange") 
  console.log(fruits); // ["apple","banana","orange"] 

  ```

  ### 3. Remove the first fruit from the array

  ```js
fruits.splice(0,1) // splice(index,how many from that index is deleted)
console.log(fruits)//[ 'banana', 'orange' ]

  ```

  ### 4. Add "grape" to the end of the array
  ```js
  fruits.push("grape") 
  console.log(fruits) //[ 'banana', 'orange', 'grape' ]
  ```

  ### 5. Update the second fruit in the array to "pear".

```js
fruits.splice(1,1,"pear"); //splice(index,howmany,what add in that place)
console.log(fruits) //[ 'banana', 'pear', 'grape' ]
```

### 6. Print the final "fruits" array after performing the above operations.

```js
console.log(fruits);//[ 'banana', 'pear', 'grape' ]
```

## Objects

### 1.Create an empty object called "person"

```js
let person = {} //empty object
console.log(person)//{}
```

### 2.Add the following property from the "person" object: name : "John", age:30, city:"New York"

```js
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

```

### 3. Remove the age property from the "person" object
```js
delete person.age //delete the age property from person
console.log(person) //{ name: 'John', city: 'New York' }

```
### 4. Add a new property called "job" with the value "Engineer" to the "person" object

```js

person.job = "Engineer"
console.log(person) //{ name: 'John', city: 'New York', job: 'Engineer' }

```
### 5. Update the "city" propert of the person object to "San Francisco".

```js
person.city = "San Francisco"
console.log(person)//{ name: 'John', city: 'San Francisco', job: 'Engineer' }
```

### 6. Print the final 'person' object after performing the above operations.
```js
console.log(person) //{ name: 'John', city: 'San Francisco', job: 'Engineer' }
```


## ArrayOfObjects

### 1. Create a array of an objects.

```js
let cars = [] //empty array
console.log(cars) //[]
```
### 2.Add three car objects to the "cars" array.Each car object should have the following properties: make:"Toyota",model:"Camry",year:2018

```js
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

console.log(cars)//[{ make: 'Toyota', model: 'Camry', year: 2018 },{ make: 'Toyota', model: 'Camry', year: 2018 },{ make: 'Toyota', model: 'Camry', year: 2018 }]
```

### 3. Remove the first car object from the "cars" array.

```js
cars.splice(0,1)//delete the first car object
console.log(cars)//[ { make: 'Toyota', model: 'Camry', year: 2018 },{ make: 'Toyota', model: 'Camry', year: 2018 }]
```

### 4. Add a new car object to the "cars" array with the following properties: make:"Honda",model:"Civic",year:2020

```js
cars.push({
    make:"Honda",
    model:"Civic",
    year:2020
})
console.log(cars)//[{ make: 'Toyota', model: 'Camry', year: 2018 },{ make: 'Toyota', model: 'Camry', year: 2018 },{ make: 'Honda', model: 'Civic', year: 2020 }]
```

### 5.Update the "model" property of the second car object in the array to "Accord".

```js
cars[1].model ="Accord"//update model at 2nd car
console.log(cars)//[ { make: 'Toyota', model: 'Camry', year: 2018 },{ make: 'Toyota', model: 'Accord', year: 2018 },{ make: 'Honda', model: 'Civic', year: 2020 }]
```

### 6. Print the final "cars" array after performing the above operations.

```js
console.log(cars)//[ { make: 'Toyota', model: 'Camry', year: 2018 },{ make: 'Toyota', model: 'Accord', year: 2018 },{ make: 'Honda', model: 'Civic', year: 2020 }]
```
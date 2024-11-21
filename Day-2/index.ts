// syntax of defining type 
type User = {
    firstName: string;
    lastName: string;
    age: number;
}
// very similar to interfaces but they let you do few other things which interfaces can't

// Unions
type StringOrNumber = string | number; 

function printId(id: StringOrNumber) {
    console.log(`ID: ${id}`)
}

printId(100);
printId("tomm");


// type lets us to do Intersection

type Employee = {
    name: string;
    startDate: Date;
}

type Manager = {
    name: string;
    departement: string;
}

type TeamLead = Employee & Manager; 

const teamlead: TeamLead = {
    name: " John ",
    startDate: new Date(),
    departement: "Technology"
}



// Arrays in Typescript 

const Arr = [1, 13, 17, 15, 256, 7, 90, 456, 329];

// Given an array of positive integers, return the maximum value in the array

function maxValue(array: number[]) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max;
}

const maxNum = maxValue(Arr)
console.log(maxNum)     // gives the maximum value of the array = 456



// Given a list of users, filter out the users that are legal to Vote (greater than 18 years of age)

interface voter {
    firstName: string;
    lastName: string;
    age: number;
}

const votersList: voter[] = [
    { firstName: "John", lastName: "Doe", age: 5 },
    { firstName: "Jane", lastName: "Smith", age: 30 },
    { firstName: "Alex", lastName: "Johnson", age: 22 },
    { firstName: "Emily", lastName: "Davis", age: 7 },
    { firstName: "Michael", lastName: "Brown", age: 35 },
    { firstName: "Sarah", lastName: "Wilson", age: 9 },
    { firstName: "David", lastName: "Taylor", age: 40 },
    { firstName: "Laura", lastName: "Anderson", age: 24 },
    { firstName: "James", lastName: "Thomas", age: 33 },
    { firstName: "Sophia", lastName: "Martinez", age: 6 },
]

function filterLegalUsers(list : voter[]){
    return list.filter(users => users.age >= 18)
}

console.log(filterLegalUsers(votersList)) // filters out the users legal to vote



// Tuples 
// In TypeScript, a tuple is a special type of array with a fixed number of elements

let Person: [string, number?];  // ? to make any element optional
Person = ["Alice", 25];   // ✅ Correct
Person = ["Alice"];       // ✅ Correct
Person = [];              // ❌ Error: At least one element is required


/* Enums (short for enumerations) in TypeScript are a feature
that allows you to define a set of named constants.      

*/

function doSomething (keyPressed){
    // do something
    // wrong approach
}

enum Direction {
    Up,         //0
    Down,       //1 
    Left,       //2
    Right       //3
}

function playSomething (keyPressed : Direction){
    // do something
    // correct approach
}
playSomething(Direction.Up) // Prints  0



//  Common usecase in express

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}
let currentStatus: ResponseStatus = ResponseStatus.Success;     // 200

/*
app.get("/', (req, res) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.Error).json({})
    }
    // and so on...
		res.status(ResponseStatus.Success).json({});
}) */
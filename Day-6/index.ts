//Type Guards

//typeof
function formatInput(input: string | number) {
    if (typeof input == "string") {
        return input.toUpperCase();
    }
    else {
        return input.toFixed(2)
    }
}
console.log(formatInput("Hey There")); // HEY THERE
console.log(formatInput(23))           // 23.00

//instanceof

class Boy {
    heGreet() {
        console.log("Hey, i'm a Boy");

    }
}
class Girl {
    sheGreet() {
        console.log("Hello, i'm a girl");

    }
}

function gender(human: Boy | Girl) {
    if (human instanceof Boy) {
        human.heGreet()
    }
    else {
        human.sheGreet()
    }
}

const myCousin1 = new Boy()
const myCousin2 = new Girl();
gender(myCousin1);
gender(myCousin2);


// Utility Types

//Partial
type todo = {
    title: string;
    completed: boolean;
}

const updateTodo: Partial<todo> = {
    completed: true
}

//Pick

type TodoTitle = Pick<todo, "title">
const todoTitle: TodoTitle = {
    title: " Learn Typescript ",
}

// Intersection Types

type Person = {
    name: string;
};

type Employee = {
    id: number;
};

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
    name: "Alice",
    id: 101,
};


//Conditional Types

type IsString<T> = T extends string ? true : false;

type TestCase1 = IsString<string>; // true
type TestCase2 = IsString<number>; // false


//Convert to Readonly

type Car = {
    brand: string;
    model: string;
    year: number;
}
type ReadonlyVehicle = Readonly<Car>

const myVehicle: ReadonlyVehicle = {
    brand: "Mahindra",
    model: " EV ",
    year: 2024
}
// myVehicle.year = 2023 // Error: Cannot assign to year because it's s read-only property
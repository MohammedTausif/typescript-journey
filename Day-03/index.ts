// Generics :- provides a way to write flexible, reusable, and type-safe code.
const array1 = ["one", "two", "three", "four", "five", "six"]
const array2 = [1, 2, 3, 4, 5, 6, 7]

function returnFirstElement(arr: (string | number)[]) {
    return arr[0]
}
const data1 = returnFirstElement(array1) // toUpperCase(), toLowerCase() ...doesn't work
// console.log(data1.toUpperCase())  wrong approach it does not return toUpperCase() or toLowerCase()

// better approach

function getFirstElement<T>(arg: T[]) {
    return arg[0];
}

const firstEl1 = getFirstElement(array1)
console.log(firstEl1.toUpperCase());

const firstEl2 = getFirstElement(array2)
console.log(firstEl2.toString())


/* Exporting and importing modules
   TypeScript follows the ES6 module system,
   using import and export statements to share code between different files. */


// 1. Constant exports
import { add, substract } from "./math"

console.log(add(1, 2))
console.log(substract(3, 1))


// 2. Default exports
import Calculator from "./Calculator"

const calc = new Calculator();
console.log(calc.add(10, 5))

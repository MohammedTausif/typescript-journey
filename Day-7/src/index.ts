// import and export 
import { add, substract } from './Math';
import greet from './Math';

const test1 = add(1, 2)
const test2 = substract(1, 2)
console.log(test1);
console.log(test2);

const Greet = greet("Tom & Jerry")
console.log(Greet);


// Namespaces

namespace calculate {
    export const PI = 3.14;

    export function circleArea(radius: number): number {
        return PI * radius * radius
    }

    export function rectangleArea(length: number, width: number): number {
        return length * width
    }
    export function triangleArea(base: number, height: number): number {
        return 0.5 * base * height

    }
}

console.log(`Area of Circle : ${calculate.circleArea(10)}`);
console.log(`Area of Rectangle : ${calculate.rectangleArea(5, 10)}`);
console.log(`Area of Triangle : ${calculate.triangleArea(10, 5)}`);

// Decorators

function Logger(f: Function) {
    console.log(`Class ${f.name} was created`);

}

@Logger
class Person {
    constructor(public name: string) { }
}

//Method Decorators

function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Method "${propertyKey}" was called with arguments: [${args}]`);
        return originalMethod.apply(this, args);
    };
}

class Calculator {
    @LogMethod
    add(a: number, b: number) {
        return a + b;
    }
}
const operation = new Calculator();
operation.add(20, 40) // Logs: Method "add" was called with arguments: [5, 10]
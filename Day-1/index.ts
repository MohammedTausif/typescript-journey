// Interafce in Typescript

interface todoType {
    title: string,
    desc: string,
    done?: boolean
}

interface TodoInput {
    todo: todoType
}
function Todo({ todo }: TodoInput) {
    console.log(todo.title)
    console.log(todo.desc)
    console.log(todo.done)
}

Todo({
    todo: {
        title: " Typescript ",
        desc: "Learn From 0 to 100 <3 ",
        done: false
    }
})

// Implementing interfaces

interface Person {
    name: string,
    age: number,
    greet(phrase: string): void
}

// create a class which implements this interface

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }
    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`)
    }
}





// Abstract classes

abstract class Shape {
    abstract name: string;
    abstract calculatedArea(): number;
    describe(): void {
        console.log(`This shape is a ${this.name} with an area of ${this.calculatedArea()} units squared`)
    }
}

// Rectangle & Circle classes

class Rectangle extends Shape {
    name = "Rectangle";

    constructor(public width: number, public height: number) {
        super()
    }
    calculatedArea(): number {
        // To return the area of rectangle
        return this.height * this.width
    }
}
class Circle extends Shape {

    name = "Circle";

    constructor(public radius: number) {
        super()
    }
    calculatedArea(): number {
        // To return the area of circle 
        return Math.PI * this.radius * this.radius
    }
}

class square extends Shape {
    name = "square";
    width = 2;
    height = 2;
    calculatedArea(): number {
        return this.width * this.height
    }
}
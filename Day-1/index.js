"use strict";
// Interafce in Typescript
function Todo({ todo }) {
    console.log(todo.title);
    console.log(todo.desc);
    console.log(todo.done);
}
Todo({
    todo: {
        title: " Typescript ",
        desc: "Learn From 0 to 100 <3 ",
        done: false
    }
});
// create a class which implements this interface
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
// Abstract classes
class Shape {
    describe() {
        console.log(`This shape is a ${this.name} with an area of ${this.calculatedArea()} units squared`);
    }
}
// Rectangle & Circle classes
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.name = "Rectangle";
    }
    calculatedArea() {
        // To return the area of rectangle
        return this.height * this.width;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        this.name = "Circle";
    }
    calculatedArea() {
        // To return the area of circle 
        return Math.PI * this.radius * this.radius;
    }
}
class square extends Shape {
    constructor() {
        super(...arguments);
        this.name = "square";
        this.width = 2;
        this.height = 2;
    }
    calculatedArea() {
        return this.width * this.height;
    }
}

// Classes In Typescript 
class Person {
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }

    greet(): void{
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }

}

const person = new Person ("John", 19)
person.greet() 
// output : Hello my name is John and I am 19 years old


// Modifiers : Public, Private, Protected

class Animal {
    public name: string;
    private sound: string;
  
    constructor(name: string, sound: string) {
      this.name = name;
      this.sound = sound;
    }
  
    public makeSound(): void {
      console.log(`${this.name} says ${this.sound}`);
    }
  
    private secretMethod(): void {
      console.log("This is a secret.");
    }
  }
  
  const cat = new Animal("Cat", "Meow");
  cat.makeSound(); // Output: Cat says Meow

  // cat.secretMethod(); // Error: Property 'secretMethod' is private
  

  // Inheritance

  class vehciles {
    constructor(public brand: string) {}
    start(): void {
        console.log((`${this.brand} Vehicle is Starting `));
        
    }
  }

  class Car extends vehciles {
    constructor(brand:string , public model: string){
        super(brand)
    }
    showDetails() : void{
        console.log(`${this.brand} ${this.model}`);
        
    }
  }
  const car =new Car("Tesla", "ModelS")
  car.start()          //Output: Tesla Vehicle is Starting
  car.showDetails()   // Output: Tesla ModelS
  

  //Abstract Classes

  abstract class Appliance {
    abstract turnOn(): void; // Abstract method
  
    turnOff(): void {
      console.log("Turning off the appliance.");
    }
  }
  
  class Fan extends Appliance {
    turnOn(): void {
      console.log("Fan is now on.");
    }
  }
  
  const fan = new Fan();
  fan.turnOn(); // Output: Fan is now on.
  fan.turnOff(); // Output: Turning off the appliance.
  // const appliance = new Appliance(); // Error: Cannot create an instance of an abstract class
  
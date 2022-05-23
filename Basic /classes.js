"use strict";
class Vehicle {
    // public drive():void {
    //     console.log('chugga chugga')
    // }
    constructor(color) {
        this.color = color;
    }
    honk() {
        console.log('beep');
    }
}
const vehiclee = new Vehicle('orange');
console.log(vehiclee.color);
// vehiclee.honk(); <--- can't acess to new object 
//class extends the vehicle and overloads the methods
class Car extends Vehicle {
    constructor(wheels, color) {
        super(color);
        this.wheels = wheels;
    }
    drive() {
        console.log('vroom vroom');
    }
    // honk(): void {
    //     console.log('oink oink');
    // }
    startDrivingProcess() {
        this.drive();
        this.honk(); //can be accessed only to sub classes extending from parent class
    }
}
const gari = new Car(4, 'red');
gari.startDrivingProcess();
// gari.honk();
// const vehicle = new Vehicle();
//vehicle.drive();
// vehicle.honk();

class Vehicle {
    // public drive():void {
    //     console.log('chugga chugga')
    // }
   
    constructor(public color:string) {}

    protected honk():void {
        console.log('beep');
    }
}

const vehiclee = new Vehicle('orange'); 
console.log(vehiclee.color);

// vehiclee.honk(); <--- can't acess to new object 

//class extends the vehicle and overloads the methods
class Car extends Vehicle { 

    constructor(public wheels: number, color:string) {
        super(color);
    }

    private drive(): void {        //cannot make this private if parent class has same method public
        console.log('vroom vroom');
    }
    // honk(): void {
    //     console.log('oink oink');
    // }

    startDrivingProcess():void {
        this.drive();
        this.honk(); //can be accessed only to sub classes extending from parent class
    }
}


const gari = new Car(4, 'red');
console.log(gari)
gari.startDrivingProcess();
// gari.honk();



// const vehicle = new Vehicle();
//vehicle.drive();
// vehicle.honk();
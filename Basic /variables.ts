//var types
let apples = 2;  // < ---- Type Inference (automatically figured out by ts)
let speed: string = 'speed';
let hasName: boolean = true;


//null and undefined
let nothingMuch: null = null;
let nothing:undefined = undefined; 


//built in object
let now: Date = new Date();


//Array
let colors:string[] = ['red', 'blue', 'green'];
let myNumbers:number[]= [2,3,4,5,6,7,8,9];
let truths: boolean[] = [true,true,false,true];


//Classes 
// class Car {

// }
//let car: Car = new Car(); //type class Car


// Object literal
let point: { x:number; y:number } = {
    x:10,        
    y:20
};


// Function
const logNumber: (i:number) => void = (i:number) => {
    console.log(i);
};


// When to use annotations
// 1) Function that returns the 'any' type --> ts has no idea what the variable is  (AVOID any type)
const json = '{"x":10, "y":20}';
const coordinates: {x:number;y:number} = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};


//2) When we declare a variable on one line 
// and initialize it later
let words:string[] = ['red', 'green', 'blue'];
let foundWord:boolean = false; 
for(let i=0; i<words.length;i++) {
    if(words[i] === 'green') {
        foundWord = true;
    }
}


//3) Varialbe whose type cannot be inferrred correctly
let numbers = [-10, -1, 12];
let numberAboveZero:boolean | number = false;    
for(let i=0; i< numbers.length;i++) {
    if(numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}

console.log(nothingMuch);
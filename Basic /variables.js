"use strict";
//var types
let apples = 2; // < ---- Type Inference (automatically figured out by ts)
let speed = 'speed';
let hasName = true;
//null and undefined
let nothingMuch = null;
let nothing = undefined;
//built in object
let now = new Date();
//Array
let colors = ['red', 'blue', 'green'];
let myNumbers = [2, 3, 4, 5, 6, 7, 8, 9];
let truths = [true, true, false, true];
//Classes 
// class Car {
// }
//let car: Car = new Car(); //type class Car
// Object literal
let point = {
    x: 10,
    y: 20
};
// Function
const logNumber = (i) => {
    console.log(i);
};
// When to use annotations
// 1) Function that returns the 'any' type --> ts has no idea what the variable is  (AVOID any type)
const json = '{"x":10, "y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};
//2) When we declare a variable on one line 
// and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord = false;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
//3) Varialbe whose type cannot be inferrred correctly
let numbers = [-10, -1, 12];
let numberAboveZero = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
console.log(nothingMuch);

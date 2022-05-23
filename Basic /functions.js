"use strict";
//annotations on functions
const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
function divide(a, b) {
    return a / b;
}
const multiply = function (a, b) {
    return a * b;
};
const logger = (message) => {
    console.log(message);
    if (!message)
        throw new Error(message);
};
const forecast = {
    date: new Date(),
    weather: 'sunny'
};
const logWeather = ({ // <-- destructuring to take the properties and then accepting parameters
date, weather }) => {
    console.log(date, weather);
};
logWeather(forecast);

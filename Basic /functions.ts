//annotations on functions

const add = (a:number,b:number) => {
    return a + b;
};


const subtract = (a:number,b:number):number => { // <-- type inference is void but good practice to always set the type notation
    return a - b;
};


function divide(a:number,b:number):number {
    return a/b;
}

const multiply = function(a:number,b:number):number {
    return a * b;
}

const logger = (message:string):void => {
    console.log(message);
    if(!message) 
        throw new Error(message); 
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({  // <-- destructuring to take the properties and then accepting parameters
    date, 
    weather
}: {
        date: Date; 
        weather: string;
    }):void => {
    console.log(date, weather);
}

logWeather(forecast);
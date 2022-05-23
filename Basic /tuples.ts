// Tuple - Array-like structure where each element represents sone property of a record


const drink = {
    color:'brown',
    carbonated: true,
    sugar: 40
};
type Drink = [string,boolean,number]; //<-- creating an idea of a tuple 

//this is tuple - always consist the same order
const pepsi: Drink = ['brown', true, 40];
// pepsi[0] = 40;
// pepsi[2] = 'brown';  <---- can't change order
const sprite:Drink = ['clear', true, 40];
const tea:Drink = ['brown', false, 0];


const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsePower:400,
    weight:3354
}

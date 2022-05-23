"use strict";
const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary() {
        return `Name: ${this.name}`;
    }
};
const ddrink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary() {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};
// type annotation is very long and all other functions would take this annotation, don't dry
const printSummary = (item) => {
    console.log(item.summary);
};
printSummary(oldCivic);
printSummary(ddrink);

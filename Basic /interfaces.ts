interface Reportable {
    summary():string;
}


const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary():string {
        return `Name: ${this.name}`;
    }
};


const ddrink = {
    color:'brown',
    carbonated: true,
    sugar: 40, 
    summary():string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
}

// type annotation is very long and all other functions would take this annotation, don't dry
const printSummary  = (item: Reportable):void => {
    console.log(item.summary);
};

printSummary(oldCivic);
printSummary(ddrink); 
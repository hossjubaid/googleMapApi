const profile = {
    name: 'Alex',
    age: 20,
    coords: {
        lat: 0,
        lng:15
    },
    setAge(age:number):void { //function being defined inside an object using es2015
        this.age = age;
    }
};

//const { age, name }: {age:number,name:string} = profile;
const {
    coords:{lat,lng}}: {
            coords: {lat:number;lng:number}} = profile;

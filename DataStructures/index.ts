
import {Sorter} from './Sorter'
import { NumbersCollection } from './NumbersCollection'



const numbersCollection = new NumbersCollection([0,-1,4,1,9,7,-4,35]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);



// class Sorter {
//   constructor(public collection: number[] | string | LinkedList) {}

//   sort(): void {
//     const { length } = this.collection;

//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {

//         if(this.collection instanceof LinkedList) {

//         }

//         if (this.collection instanceof Array) {
//           if (this.collection[j] > this.collection[j + 1]) {
//             const leftHand = this.collection[j];
//             this.collection[j] = this.collection[j + 1];
//             this.collection[j + 1] = leftHand;
//           }
//         }

//         if (typeof this.collection === 'string') {
//         }
//       }
//     }
//   }
// }

// const sorter = new Sorter([10, 3, -5, 0]);
// sorter.sort();
// console.log(sorter.collection);

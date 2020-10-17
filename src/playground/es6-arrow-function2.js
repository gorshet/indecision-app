// Arguments objects - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(51,5));

// This keywod - no longer bound

const user = {
    name: "Jorge",
    cities: ['Caracas', 'Madrid', 'Miami'],
    printPlacesLived() {
    return this.cities.map((city) => this.name + " " + 'has lived in' + " " + city);
}
};
   console.log(user.printPlacesLived());


   // Challenge area

   const multiplier = {
    nums: [2, 4, 6, 8, 10],
    multiplyBy: 2,
    multiply() {
    return this.nums.map((number) => number * this.multiplyBy)
    } 
   };

   console.log(multiplier.multiply());
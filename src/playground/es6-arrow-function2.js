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
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
    const that = this;
    

    this.cities.forEach((city) =>{
    console.log(that.name + ' ' + 'has lived in' + ' ' + city )
   });
    }
};
user.printPlacesLived();
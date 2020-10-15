'use strict';

// Arguments objects - no longer bound with arrow functions

var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};

console.log(add(51, 5));

// This keywod - no longer bound

var user = {
    name: "Jorge",
    cities: ['Caracas', 'Madrid', 'Miami'],
    printPlacesLived: function printPlacesLived() {
        var that = this;

        this.cities.forEach(function (city) {
            console.log(that.name + ' ' + 'has lived in' + ' ' + city);
        });
    }
};
user.printPlacesLived();

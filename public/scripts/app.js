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
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + " " + 'has lived in' + " " + city;
        });
    }
};
console.log(user.printPlacesLived());

// Challenge area

var multiplier = {
    nums: [2, 4, 6, 8, 10],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.nums.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());

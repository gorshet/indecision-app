/*function square (x) {
    return x * x;
};

console.log(square(3));

//const squareArrow = (x) => {
//    return x * x;
//}

const squareArrow = (x) => x * x;

console.log(squareArrow(2));
*/

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(getFirstName('Mike Smith'));


const getFirstName2 = (fullName) => fullName.split(' ')[0];

console.log(getFirstName2('Jorge Montes'));
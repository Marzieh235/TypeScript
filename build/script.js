"use strict";
function sum(x, y) {
    return x + y;
}
console.log(sum(5, 6));
let sum2 = function (x, y) {
    return x + y;
};
console.log(sum2(5, 'amir'));
let sum3 = (x, y) => x + y;
console.log(sum3(5, 'amir'));
let test;
test = function (a, b) {
    return 'amirm + MJ';
};
console.log(test('', ''));
let sum5 = (x = 1, y) => {
    if (y) {
        return x + y;
    }
    return x;
};
console.log(sum5(3, 4));
console.log(sum5());
let sum6 = (x = 1, ...numbers) => {
    console.log(x, numbers);
};
console.log(sum6(2, 22, 33));

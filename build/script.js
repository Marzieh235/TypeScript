"use strict";
class MyArray {
    constructor(data, data2) {
        this.data = data;
        this.data2 = data2;
    }
    addItem(item) {
        this.data.push(item);
    }
    getItem(index) {
        return this.data[index];
    }
}
let list = new MyArray(['iitem1 ', 'item2'], [false, true]);
list.addItem('4');
console.log(list.getItem(0));
function logParameters(x, y) {
    console.log(x, y);
}
logParameters('2', true);

"use strict";
function printLabel(labledObj) {
    console.log(labledObj.label);
}
function labelX(labledObj) {
    console.log(labledObj.size);
}
let myObj = { size: 10, label: "Size 10", xx: 123 };
printLabel(myObj);
let myObj2 = { size: 20, label: "Size 20" };
labelX(myObj2);

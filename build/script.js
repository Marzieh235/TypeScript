"use strict";
var test;
(function (test) {
    test[test["up"] = 0] = "up";
    test[test["down"] = 1] = "down";
    test[test["left"] = 5] = "left";
    test[test["right"] = 6] = "right";
})(test || (test = {}));
console.log(test);
let T = test.left;
console.log(T);

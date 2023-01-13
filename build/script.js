"use strict";
var logError;
(function (logError) {
    function log(message) {
        console.log(`%c ${message}`, 'color:red');
    }
    logError.log = log;
})(logError || (logError = {}));
/// <reference path="log-error.ts" />
var logSuccess;
/// <reference path="log-error.ts" />
(function (logSuccess) {
    function log(message) {
        console.log(`%c ${message}`, 'color:green');
    }
    logSuccess.log = log;
})(logSuccess || (logSuccess = {}));
/// <reference path="log-error.ts" />
/// <reference path="log-success.ts" />
logSuccess.log('hello everyOne');

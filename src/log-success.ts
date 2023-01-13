/// <reference path="log-error.ts" />

namespace logSuccess {
   export function log(message:string) : void {
        console.log(`%c ${message}` , 'color:green')
    }
}
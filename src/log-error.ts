namespace logError {
   export function log(message:string) : void {
        console.log(`%c ${message}` , 'color:red')
    }
}
var readlineSync = require('readline-sync');

var lowerNumber = parseInt(readlineSync.question("Enter a lower number :"));
var higherNumber = parseInt(readlineSync.question("Enter a higher number :"));

console.log("Prime Numbers between " + lowerNumber + "to" + higherNumber + "are");


for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

   
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
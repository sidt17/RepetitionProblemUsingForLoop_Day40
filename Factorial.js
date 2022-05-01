var readlineSync = require('readline-sync');

var number = parseInt(readlineSync.question("Enter a number :"));



let fact = 1;

            for (let i = 1; i <= number; i++)
            {
                fact = fact * i;
            }
            console.log("Factorial of "+number  + " is :" + fact);
            

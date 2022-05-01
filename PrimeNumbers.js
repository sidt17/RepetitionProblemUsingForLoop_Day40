var readlineSync = require('readline-sync');

var number = parseInt(readlineSync.question("Enter a number :"));




let count=0;

for (let i = 1; i <= number; i++)
{
    if (number % i == 0)
    {
       count++;
    }
}


if (count == 2)
{
    console.log("It is a Prime Number");
}
else
{
    console.log("It is not a Prime Number");
}

var readlineSync = require('readline-sync');

var n = parseInt(readlineSync.question("Enter a number :"));

let i;
let harmonic =0;
            for (i = 1; i <= n; i++)
            {
               console.log("1/" + i);
               harmonic += parseFloat(1) / i;
            }

           console.log("harmonic mean upto " + n + " = " + harmonic);

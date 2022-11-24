/*
This function take 2 parameters, a length and a width, and calculate his surface.
*/
function calcSurface(length, width) {
    return length * width;
}


/*
This function does the same than the calcSurface() but use arrow function.
*/
let calcSurfaceAlt = (length, width) => length * width;


/*
This is the function called when running the .js file.
It will ask a length and a width by the user.
*/
function exec() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let length = null;
    let width = null;

    rl.question("Please enter the length of the rectangle in cm:\n", function (number) {
        length = number;
        rl.question("Please enter the width of the rectangle in cm:\n", function (number) {
            width = number;
            console.log("The surface of the rectangle is : " + calcSurfaceAlt(length, width) + " cm²");
            rl.close();

        });
    });
}

exec();
/*
This function generate randoms Integer between a given range.
This example use a range from 1 to 10 and ask user for how many numbers the function should return.
*/
function multiRand(n) {
    let array = [];
    for (let i = 1; i <= n; i += 1) {
        array.push(rand10(1, 10));
    }
    console.log(array.toString());
}

function rand10(value1, value2) {

    min = Math.ceil(value1);
    max = Math.floor(value2);

    return Math.floor(Math.random() * (max - min) + min);
}

function exec() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });


    rl.question("Please enter a number:\n", function (number) {
        let input = number;
        multiRand(input);
        rl.close()
    });
}

exec();
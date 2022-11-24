const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = null;

rl.question("What is your favorite number:\n", function (number) {
    input = number;

    if (input !== 42) {
        console.log("Are you sure?");
        rl.question("What is your favorite number:\n", function (number) {
            input = number;
        });
    } else{
        rl.close()
    }
});
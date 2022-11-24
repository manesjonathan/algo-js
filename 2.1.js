const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = "";

rl.question("Please enter your age:\n", function (number) {
    input = number;

    if (input >= 18) {

        console.log("You are an adult.");
    } else {
        console.log("You are not yet an adult.")
    }
    rl.close()
});
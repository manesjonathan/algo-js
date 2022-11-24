const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question("Please enter a number between 1 and 7:\n", function (number) {
    let input = number;

    if (input == 1) {
        console.log("Monday");
    } else if (input == 2) {
        console.log("Tuesday")
    }
    else if (input == 3) {
        console.log("Wednesday")
    }
    else if (input == 4) {
        console.log("Thursday")
    }
    else if (input == 5) {
        console.log("Friday")
    }
    else if (input == 6) {
        console.log("Saturday")
    } else if (input == 7) {
        console.log("Sunday")
    }
    rl.close()
});
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let sum = 0;
let n = null;

function exec() {

    rl.question("Please enter a number:\n", function (number) {
        n = number;
    rl.close()
    calculateSum(n);

});
}

function calculateSum(n){
    for (i = 1; i <= n; i++) {
        rl.question("Please enter a new number:\n", function (number) {
            sum = sum + number;

        });
    }
    console.log(sum);
}

exec();



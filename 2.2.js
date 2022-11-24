const { Console } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let min = "";
let max = "";
let current = "";

rl.question("Please enter a min\n", function (number) {
    min = number;
    console.log("The number entered is: " + min)    

    rl.question("Please enter a max\n", function (number) {
        max = number;
        console.log("The number entered is: " + max)    


        rl.question("Please enter a current\n", function (number) {
            current = number;
            console.log("The number entered is: " + current)   
            
            if (current <max && current >min){
                console.log("It's true, you current number is between " +min + " and " + max + ".");
                rl.close()
            } else{
                console.log("Sorry, you current number is not between " +min + " and " + max + ".")
                rl.close()
            }
            rl.close()
        });
    });
});
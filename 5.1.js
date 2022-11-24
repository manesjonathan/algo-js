const { Console } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let name = "";
let productionYear = null;
let castMembers = [];

rl.question("Please enter a name\n", function (string) {
    name = string;

    rl.question("Please enter a production year\n", function (number) {
        productionYear = number;

        rl.question("Please enter cast members, separated with a coma\n", function (input) {
            
            castMembers = input.split(",");

            let myObject = {
                "name": name,
                "productionYear": productionYear,
                "castMembers": castMembers
        
            };
            console.log(myObject);

            rl.close()
        });
    });
});
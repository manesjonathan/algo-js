function exec() {
    const { exec } = require("child_process");
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let x1 = null;
    let y1 = null;
    let x2 = null;
    let y2 = null;

    rl.question("Please enter coordinates x1:\n", function (number) {
        x1 = number;

        rl.question("Please enter coordinates y1:\n", function (number) {
            y1 = number;

            rl.question("Please enter coordinates x2:\n", function (number) {
                x2 = number;

                rl.question("Please enter coordinates y2:\n", function (number) {
                    y2 = number;
                    console.log("The number of blocks is : " + manhattan(x1, y1, x2, y2) + " blocks.");

                    rl.close()
                });
            });
        });
    });
}

/*
*This function take two coordinates (x1, y1 and x2, y2).
* It returns the sum of the absolute value of the abscissa and ordinate.
* If we not use Math.abs, the return value could be negative.
* The return value is given in number of block(s).
*/
function manhattan(x1, y1, x2, y2) {
    let dist = Math.abs(x2 - x1) + Math.abs(y2 - y1);
    return dist;
}

exec();
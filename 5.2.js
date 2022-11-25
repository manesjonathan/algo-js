function randomizeCast(tvSerie) {
    let newTvSerie = tvSerie;

    let sortedArray = tvSerie.castMembers;
    newTvSerie.castMembers = sortedArray.sort();
    console.log(newTvSerie.castMembers);
    
    return newTvSerie.castMembers;
}

function askTvSerie() {
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

                let castMembersList = [];
                castMembers.forEach(element => {
                    castMembersList.push(element);
                });

                let tvSerie = {
                    "name": name,
                    "productionYear": productionYear,
                    "castMembers": castMembersList

                };
                console.log(tvSerie);
                randomizeCast(tvSerie);
                rl.close()
            });
        });
    });
}

askTvSerie();
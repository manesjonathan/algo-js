function exec() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let inputAge = null;
    let inputPlanet = "";


    rl.question("Please enter your age in seconds:\n", function (number) {

        inputAge = number;

        rl.question("Please enter a planet between Mercury, Venus, Earth, Mars or Jupiter:\n", function (string) {

            inputPlanet = string;
            spaceAge(inputAge, inputPlanet);
            rl.close();
        });
    });
}

function spaceAge(numberOfSeconds, planet) {
    let ageOnPlanet = null;
    let earthDays = 365.25;
    let mercuryYearsEarth = 0.2408467;
    let venusYearsEarth = 0.61519726;
    let earthYear = 1;
    let marsYearsEarth = 1.8808158;
    let jupiterYearsEarth = 11.862615;

    switch (planet) {
        case "Mercury":
            ageOnPlanet = (numberOfSeconds / ((earthDays * mercuryYearsEarth) * 24 * 60 * 60)).toFixed(2);
            console.log("Your age on " + planet + " is " + ageOnPlanet);
            break;

        case "Venus":
            ageOnPlanet = (numberOfSeconds / ((earthDays * venusYearsEarth) * 24 * 60 * 60)).toFixed(2);
            console.log("Your age on " + planet + " is " + ageOnPlanet);
            break;

        case "Earth":
            ageOnPlanet = (numberOfSeconds / ((earthDays * earthYear) * 24 * 60 * 60)).toFixed(2);
            console.log("Your age on " + planet + " is " + ageOnPlanet);
            break;

        case "Mars":
            ageOnPlanet = (numberOfSeconds / ((earthDays * marsYearsEarth) * 24 * 60 * 60)).toFixed(2);
            console.log("Your age on " + planet + " is " + ageOnPlanet);
            break;

        case "Jupiter":
            ageOnPlanet = (numberOfSeconds / ((earthDays * jupiterYearsEarth) * 24 * 60 * 60)).toFixed(2);
            console.log("Your age on " + planet + " is " + ageOnPlanet);
            break;
    }
}
exec();
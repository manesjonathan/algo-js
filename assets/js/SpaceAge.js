function exerciseSpaceAge() {
    let inputAge = prompt("Please enter your age in seconds")
    let inputPlanet = prompt("Please enter a planet between Mercury, Venus, Earth, Mars or Jupiter")
    spaceAge(inputAge, inputPlanet);
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
            console.log("Your age on " + planet + " is " + ageOnPlanet + " years");
            break;

        case "Venus":
            ageOnPlanet = (numberOfSeconds / ((earthDays * venusYearsEarth) * 24 * 60 * 60)).toFixed(2);
            console.log("Your age on " + planet + " is " + ageOnPlanet + " years");
            break;

        case "Earth":
            ageOnPlanet = (numberOfSeconds / ((earthDays * earthYear) * 24 * 60 * 60)).toFixed(2);
            console.log("Your age on " + planet + " is " + ageOnPlanet + " years");
            break;

        case "Mars":
            ageOnPlanet = (numberOfSeconds / ((earthDays * marsYearsEarth) * 24 * 60 * 60)).toFixed(2);
            console.log("Your age on " + planet + " is " + ageOnPlanet + " years");
            break;

        case "Jupiter":
            ageOnPlanet = (numberOfSeconds / ((earthDays * jupiterYearsEarth) * 24 * 60 * 60)).toFixed(2);
            console.log("Your age on " + planet + " is " + ageOnPlanet);
            break;
    }
}
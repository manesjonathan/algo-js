export function exercise51() {
    askTvSerie();
}

export function askTvSerie() {
    let name = prompt("Please enter a name");
    let productionYear = prompt("Please enter a production year");
    let castMembers = prompt("Please enter cast members, separated with a coma");

    let castMembersList = castMembers.split(",");

    let myObject = {
        "name": name,
        "productionYear": productionYear,
        "castMembers": castMembersList
    };
    console.log(myObject);
    return myObject;
}
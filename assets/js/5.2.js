import { askTvSerie } from "./5.1.js";

export function exercise52() {
    randomizeCast(askTvSerie());
}

function randomizeCast(tvSerie) {
    let newTvSerie = tvSerie;
    let sortedArray = tvSerie.castMembers;
    newTvSerie.castMembers = sortedArray.sort();
    console.log(newTvSerie.castMembers);
    return newTvSerie.castMembers;
}

let numberArrayOne = [1, 2, 3, 4, 5];

function firstMethod(array) {

    let minValue = Math.min(...array);
    let maxValue = Math.max(...array);

    console.log("Min value is : " + minValue);
    console.log("Max value is : " + maxValue);
}


function secondMethod(array) {

    let minValue = Infinity;
    let maxValue = -Infinity;

    array.forEach(element => {
        if (element < minValue) {
            minValue = element;
        }

        if (element > maxValue) {
            maxValue = element;
        }
    });
    console.log("Min value is : " + minValue);
    console.log("Max value is : " + maxValue);
}
firstMethod(numberArrayOne);
secondMethod(numberArrayOne);
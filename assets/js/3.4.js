function exercise34() {
    let array = [1, 2, 3, 4, 5];

    let minValue = Math.min(...array);
    let maxValue = Math.max(...array);
    console.log("First method results");

    console.log("Min value is : " + minValue);
    console.log("Max value is : " + maxValue);

    console.log("Second method results");

    secondMethod(array);
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
function exercise22() {
    let min = prompt("Please enter a min");
    console.log("The number entered is: " + min);
    let max = prompt("Please enter a max");
    console.log("The number entered is: " + max);


    let current = prompt("Please enter a current");
    console.log("The number entered is: " + current);

    if (current < max && current > min) {
        console.log("It's true, you current number is between " + min + " and " + max + ".");
    } else {
        console.log("Sorry, you current number is not between " + min + " and " + max + ".");
    }

}
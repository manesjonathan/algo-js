function exerciseChangeCalculator() {
    console.log(computeChange(12.3, 50));
    console.log(computeChange(17.41, 20));
}

function computeChange(price, moneyHanded) {
    let change = moneyHanded - price;
    let coins = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];
    let result = [];
    for (let i = 0; i < coins.length; i++) {
        if (change >= coins[i]) {
            result.push(coins[i]);
            change -= coins[i];
            change = Math.floor(change * 100) / 100;
        }
    }
    return [moneyHanded - price + "€", result];
}
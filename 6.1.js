class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    move(xOffset, yOffset) {
        this.xPos = this.xPos + xOffset;
        this.yPos = this.yPos + yOffset;
    }

    get surface() {
        return (Math.PI * this.radius ** 2).toFixed(4);
    }
}

let myObject = new Circle(1, 1, 10);
myObject.move(3, 2);
console.log(myObject.surface);
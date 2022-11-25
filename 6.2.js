class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle) {
        if (otherRectangle.topLeftXPos < this.topLeftXPos + this.width
            && otherRectangle.topLeftXPos + otherRectangle.width > this.topLeftXPos
            && otherRectangle.topLeftYPos < this.topLeftYPos + this.length
            && otherRectangle.topLeftYPos + otherRectangle.length > this.topLeftYPos) {
                console.log(true);
                return true;
        } else {
            console.log(false);
            return false;
        }
    }
}

let rectangle1 = new Rectangle(0, 0, 10, 20);

let rectangle2 = new Rectangle(0, 0, 10, 20);
rectangle1.collides(rectangle2); // true

let rectangle3 = new Rectangle(10, 0, 10, 20);
rectangle1.collides(rectangle3); // false

let rectangle4 = new Rectangle(0, 10, 10, 20);
rectangle1.collides(rectangle4); // true
// Shape - superclass
function Shape() {
    this.x = 0;
    this.y = 0;
    console.log('Shape constructor call');
}

// superclass method
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle(width, height) {
    Shape.call(this);
    console.log('Rectangle constructor call');
    this.width = width;
    this.height = height;
};
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Shape;

Rectangle.prototype.getHeight = function(){
    return this.height;
};
Rectangle.prototype.getWidth = function(){
    return this.width;
};
Rectangle.prototype.getPosition = function(){
    return this.x + ' : ' + this.y;
};

var rectangle = new Rectangle(10, 20); //ouput:  Shape constructor call Rectangle constructor call
console.log('Width: ' + rectangle.getWidth()); //ouput: 10
console.log('Height: ' + rectangle.getHeight()); //ouput: 20
console.log('Position: ' + rectangle.getPosition()); //ouput: 0:0
rectangle.move(5, 4) // call super method move of shape 
console.log('Position: ' + rectangle.getPosition()); //ouput: 5:4








class Shape{
    constructor(){
        this.x = 0;
        this.y = 0;
        console.log('shape constructor call');
    }
    move(x, y) {
        this.x += x;
        this.y += y;
        console.info('Shape moved.');
    };
}

class Rectangle extends Shape{
    constructor(width, height){
        super();
        console.log('Rectangle constructor call');
        this.width = width;
        this.height = height;
    }
    get position(){
        console.log(`Position: x = ${this.x} - y = ${this.y}`);
    }
    get dimension(){
        console.log(`Dimension: width = ${this.width} - height = ${this.height}`);
    }

}
class Square extends Rectangle{
    constructor(width){
        super(width, width);
        console.log('Square constructor call');
    }
}
/* how to use */
let rectangle = new Rectangle(10, 20); //output: shape constructor call - Rectangle constructor call
console.log(rectangle.width); //output: 10
console.log(rectangle.height); //output: 20
console.log(rectangle.position); //output: Position: x = 0 - y = 0
console.log(rectangle.dimension); //output: Dimension: width = 10 - height = 20


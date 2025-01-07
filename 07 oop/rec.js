class rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  calculateArea() {
    let area = this.length * this.width;
    return area;
  }
  calculatePerimeter() {
    let perimeter = 2 * (this.length + this.width);
    return perimeter;
  }
}
const rect = new rectangle(20,5);
 console.log (`area:${rect.calculateArea()}`);
 console.log(`perimeter:${rect.calculatePerimeter()}`);


const circle = {
    radius: 2,
    get area() {
        return Math.round(Math.PI * (this.radius ** 2), 2);
    }
}

console.log(circle.area);
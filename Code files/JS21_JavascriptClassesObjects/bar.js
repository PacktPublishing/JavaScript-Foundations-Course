class Bar {

    constructor(length, width, color) {
        this.length = length;
        this.width = width;
        this.color = color;
    }

    area() {
        return this.length * this.width;
    }

    drawBar() {
        let out = `<div style="height: ${this.length}px; width: ${this.width}px; background-color: ${this.color}"></div>`;
        return out;
    }

}
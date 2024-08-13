const Shape = require("./shape");

class Triangle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }

  render() {
    return `
<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <polygon points="100,10 200,190 10,190" fill="${this.shapeColor}" />
    <text x="105" y="140" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>
`.trim();
  }
}

module.exports = Triangle;

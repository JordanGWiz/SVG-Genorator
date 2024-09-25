const Circle = require("./circle.js");
const Square = require("./square.js");
const Triangle = require("./triangle.js");

// Function to create a shape based on the user's response and return its rendered SVG
function shapeChoice(response) {
  const shape = response.shape.toLowerCase();

  // Check if the selected shape is "circle"
  if (shape === "circle") {
    let userShape = new Circle(
      response.shapeColor,
      response.text,
      response.textColor
    );
    return userShape.render();
  }

  // Check if the selected shape is "square"
  if (shape === "square") {
    let userShape = new Square(
      response.shapeColor,
      response.text,
      response.textColor
    );

    return userShape.render();
  }

  // Check if the selected shape is "triangle"
  if (shape === "triangle") {
    let userShape = new Triangle(
      response.shapeColor,
      response.text,
      response.textColor
    );

    return userShape.render();
  }

  return undefined;
}

module.exports = shapeChoice;

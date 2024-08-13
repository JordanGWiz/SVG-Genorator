// Import shape classes from their respective modules
const Circle = require("./circle.js");
const Square = require("./square.js");
const Triangle = require("./triangle.js");

// Function to create a shape based on the user's response and return its rendered SVG
function shapeChoice(response) {
  // Check if the selected shape is "circle"
  if (response.shape === "circle") {
    let userShape = new Circle(
      response.shapeColor,
      response.text,
      response.textColor
    );
    return userShape.render();
  }

  // Check if the selected shape is "square"
  if (response.shape === "square") {
    let userShape = new Square(
      response.shapeColor, 
      response.text,
      response.textColor 
    );
    
    return userShape.render();
  }

  // Check if the selected shape is "triangle"
  if (response.shape === "triangle") {
    
    let userShape = new Triangle(
      response.shapeColor, 
      response.text, 
      response.textColor 
    );

    return userShape.render();
  }
}

// Export the shapeChoice function for use in other modules
module.exports = shapeChoice;

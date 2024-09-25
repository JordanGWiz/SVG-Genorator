const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./lib/questions.js");
const setShape = require("./lib/shapeChoice.js");

// function to create new svg file using inquirer response and file system
function createLogo(title, response) {
  const svg = setShape(response);

  // Log the generated SVG data to check if it's valid
  console.log("Generated SVG data:", svg);

  if (!svg) {
    console.log("Error: Unable to create logo. Invalid shape data.");
    return;
  }

  const fileName = `./examples/${title}.svg`;
  fs.writeFile(fileName, svg, (err) => {
    if (err) {
      console.log("Error writing file:", err);
    } else {
      console.log(`Generated ${fileName}`);
    }
  });
}

function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      const { title } = response;

      // Log the response to see what is being passed to the setShape function
      console.log("User response:", response);
      createLogo(title, response);
    })
    .catch((err) => {
      console.log("Error during prompt:", err);
    });
}

init();

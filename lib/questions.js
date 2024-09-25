const colorKeywords = require("./colorChoice.js");

const questions = [
  {
    //File title
    name: "title",
    message: "Enter a title for your SVG file:",
    type: "input",
    validate: (input) => {
      if (!input.trim()) {
        return console.log(
          "\n The title cannot be empty. Please provide a valid title."
        );
      }
      return true;
    },
  },

  //Shape Type
  {
    name: "shape",
    message: "Select the shape for your logo:",
    type: "list",
    choices: ["Circle", "Square", "Triangle"],
  },

  //Shape Color
  // Choose between color keyword or hexadecimal format for shape color
  {
    name: "shapeColorChoice",
    message: "How would you like to specify the shape color? Choose a format:",
    type: "list",
    choices: ["color keyword", "hexadecimal"],
  },

  // Color Keyword Input with validation
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the color keyword for the shape:",
    when: (answers) => answers.shapeColorChoice === "color keyword",
    validate: (input) => {
      const inputLower = input.toLowerCase();
      if (colorKeywords.some((color) => inputLower.includes(color))) {
        return true;
      }
      return console.log("\n Please provide a valid color keyword.");
    },
  },

  // Hexadecimal Input with validation
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the hexadecimal color code for the shape (#RRGGBB):",
    when: (answers) => answers.shapeColorChoice === "hexadecimal",
    validate: (input) => {
      const hexPattern = /^#[A-Fa-f0-9]{6}$/;
      if (!hexPattern.test(input.trim())) {
        return console.log("\n Please enter a valid hexadecimal color code.");
      }
      return true;
    },
  },

  //Text Content
  // Ensure text is no more than 3 characters
  {
    name: "text",
    message: "Enter the text for your logo (max 3 characters):",
    type: "input",
    validate: (input) => {
      if (input.length > 3) {
        return console.log(
          "\n The text must be 3 characters or fewer. Please try again."
        );
      }
      return true;
    },
  },

  // Text Color Format
  // Choose between color keyword or hexadecimal format for text color
  {
    name: "textColorChoice",
    message: "How would you like to specify the text color? Choose a format:",
    type: "list",
    choices: ["color keyword", "hexadecimal"],
  },

  // Color Keyword Input for Text with validation
  {
    type: "input",
    name: "textColor",
    message: "Enter the color keyword for the text:",
    when: (answers) => answers.textColorChoice === "color keyword",
    validate: (input) => {
      const inputLower = input.toLowerCase();
      if (colorKeywords.some((color) => inputLower.includes(color))) {
        return true;
      }
      return console.log("\n Please provide a valid color keyword.");
    },
  },

  // Hexadecimal Input for Text with validation
  {
    type: "input",
    name: "textColor",
    message: "Enter the hexadecimal color code for the text (#RRGGBB):",
    when: (answers) => answers.textColorChoice === "hexadecimal",
    validate: (input) => {
      const hexPattern = /^#[A-Fa-f0-9]{6}$/;
      if (!hexPattern.test(input.trim())) {
        return console.log("\n Please enter a valid hexadecimal color code.");
      }
      return true;
    },
  },
];

module.exports = questions;

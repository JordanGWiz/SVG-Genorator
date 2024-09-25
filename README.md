# SVG-Shape-Maker

**SVG-Shape-Maker** is a command-line application that allows users to design custom SVG logos by inputting details such as the file name, text, text color, shape, and shape color. The application generates an SVG file with the chosen name, based on the user’s input, and stores it in a designated folder.

- Users can choose text and color options for the logo.
- Supports color keywords and hexadecimal color values.
- Shape options include circle, triangle, and square.
- Generates and saves the custom SVG file with the specified name.

## Installation

To install **SVG-Shape-Maker**:

1. Clone the repository
2. Navigate to the project directory.
3. Open the terminal and run the command: `npm install`.

## Usage

To generate a custom SVG logo, follow these steps:

1. Run the command: `node index.js`.
2. You will be prompted for:
   - **File Name**: The file will be saved in the `generated-logos` folder with the specified name.
   - **Text for the Logo**: You can input up to three characters.
   - **Text Color**: Enter either a color keyword or a hexadecimal value.
   - **Shape Choice**: Choose between circle, triangle, or square.
   - **Shape Color**: Input a color keyword or hexadecimal value.
3. Once all prompts are complete, the application will create an SVG file and display the message: "`Generated ${fileName}!`".

The generated SVG file will appear as a 300x200 pixel logo.

## Screenshot

[Watch the video walkthrough](./lib/assets/Screen%20Recording%202024-09-25%20045137.mp4)

## Acknowledgments

Special thanks to:

- **Joem Casusi (Tutor)** for guidance and support throughout the development process.

## Tests

To run tests for **SVG-Shape-Maker**, use the following command: `npm test`.

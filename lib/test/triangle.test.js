const Triangle = require("../triangle.js");

describe("Triangle", () => {
  it("should return logo with user choice of shape color, text, and text color", () => {
    const triangle = new Triangle("green", "AGL", "yellow");
    const renderedSvg = triangle.render().replace(/\s+/g, " ").trim();
    const expectedSvg =
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="100,10 200,190 10,190" fill="green" /> <text x="105" y="140" font-size="70" text-anchor="middle" fill="yellow">AGL</text> </svg>`
        .replace(/\s+/g, " ")
        .trim();

    expect(renderedSvg).toEqual(expectedSvg);
  });
});

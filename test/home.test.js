const { expect } = require("chai");

describe("Testing the home page", function() {
  this.timeout(0);

  it("should load", async function() {
    await kermit.goto("https://twitter.com");
    const text = await kermit.getText(
      ".StaticLoggedOutHomePage-signupSubtitle"
    );
    expect(text).equal("Join Twitter today.");
  });
});

const Engineer = require("../lib/engineer.js");

test("It should allow me to input their github username and get it back with a function", () => {
  const testGithub = new Engineer("", "", "", "github");

  expect(testGithub.getGithub()).toBe("github");
});

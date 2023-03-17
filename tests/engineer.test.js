const Engineer = require("../lib/engineer.js");

test("It should allow me to input their github username and get the username back", () => {
  const testGithub = new Engineer("", "", "", "github");

  expect(testGithub.getGithub()).toBe("github");
});

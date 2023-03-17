const Manager = require("../lib/manager.js");

test("It should allow me to input an office number and get back that number with a function", () => {
  const testOfficeNumber = new Manager("", "", "", "5");

  expect(testOfficeNumber.getOfficeNum()).toBe("5");
});

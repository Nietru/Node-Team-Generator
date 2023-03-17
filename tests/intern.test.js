const Intern = require("../lib/intern.js");

test("It should allow me to input a school name, and get it back with a function", () => {
  const testSchool = new Intern("", "", "", "school");

  expect(testSchool.getSchool()).toBe("school");
});

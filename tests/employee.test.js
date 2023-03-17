const Employee = require("../lib/employee.js");

test("It should create an object when you make any class", () => {
  const testVariable = new Employee();

  expect(typeof testVariable).toBe("object");
});

test("It should allow me to input a name, and get a name back", () => {
  const testVariable = new Employee("James");

  expect(testVariable.name).toBe("James");
});

test("It should allow me to input a name, and get a name back with a function", () => {
  const testVariable = new Employee("James");

  expect(testVariable.getName()).toBe("James");
});

test("It should allow me to input a id, and get a id back", () => {
  const testVariable = new Employee("", "123");

  expect(testVariable.id).toBe("123");
});

test("It should allow me to input a id, and get a id back with a function", () => {
  const testVariable = new Employee("", "123");

  expect(testVariable.getId()).toBe("123");
});

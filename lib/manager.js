const Employee = require("./employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNum = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNum() {
    return this.officeNumber;
  }
}

module.exports = Manager;

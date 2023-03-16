// npm packages:
const fs = require("fs");
const inquirer = require("inquirer");
// Other js files:
const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
// CSS and HTML generators:
const generateCSS = require("./src/generateCSS");
const generateHTML = require("./src/generateHTML");

// Parent Class/Global Variable:
let employees = "";

// Inquirer User Prompts:
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter team manager's name: ",
        name: "manager",
      },
      {
        type: "number",
        message: "Enter the manager's employee ID: ",
        name: "managerID",
      },
      {
        type: "input",
        message: "What is the manager's email address?: ",
        name: "managerEmail",
      },
      {
        type: "number",
        message: "Enter the manager's office number: ",
        name: "officeNumber",
      },
      {
        type: "list",
        message: "Add another team member: ",
        choice: ["Engineer", "Intern", "Team Finished!"],
        name: "addTeamMember",
      },
    ])
    .then((res) => {
      let name = response.manager;
      let id = response.managerID;
      let email = response.managerEmail;
      let officeNumber = response.officeNumber;
      // create new manager  object:
      let manager1 = new Manager(name, id, email, officeNumber);
      employees += addToHTML(manager1);
      // Will ask if they would like to add a new team member and then move on to new team member prompts:
      return addTeamMember(response.addTeamMember);
    });
}

// Initialize the prompt function:
init();

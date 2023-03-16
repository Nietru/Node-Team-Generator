// npm packages:
const fs = require("fs");
const inquirer = require("inquirer");
// Other js files:
const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");

// CSS and HTML generators:
// const generateCSS = require("./src/generateCSS");
// const generateHTML = require("./src/generateHTML");

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
        message: "Enter team manager's employee ID: ",
        name: "managerID",
      },
      {
        type: "input",
        message: "What is the team manager's email address?: ",
        name: "managerEmail",
      },
      {
        type: "number",
        message: "Enter team manager's office number: ",
        name: "officeNumber",
      },
      {
        type: "list",
        message: "Add another team member: ",
        choice: ["Add Engineer", "Add Intern", "Team completed!"],
        name: "addRole",
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
      return addRole(res.addRole);
    });
}

function addRole(res) {
  // Prompts user for engineer details if add an engineer is selected
  if (res === "Add Engineer") {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter this engineer's name: ",
          name: "engineerName",
        },
        {
          type: "number",
          message: "Enter this engineer's employee ID: ",
          name: "engineerID",
        },
        {
          type: "input",
          message: "Enter this engineer's email address: ",
          name: "engineerEmail",
        },
        {
          type: "input",
          message: "Enter this engineer's GitHub username: ",
          name: "engineerGitHub",
        },
        {
          type: "list",
          message: "Select an option:",
          choices: ["Add Engineer", "Add Intern", "Team completed!"],
          name: "addRole",
        },
      ])
      .then((res) => {
        let name = res.engineerName;
        let id = res.engineerID;
        let email = res.engineerEmail;
        let github = res.engineerGithub;
        // new engineer object:
        let engineer1 = new Engineer(name, id, email, github);
        // add to HTML:
        employees += addToHTML(engineer1);
        // if user adds another Role:
        if (res.addRole === "Add Engineer" || res.addRole === "Add Intern") {
          return addRole(res.addRole);
        }
        // if user is done adding roles to the team:
        else if (res.addRole === "Team completed!") {
          generateCSS();
          return generateHTML(employees);
        }
      });
  } else if (res === "Add Intern") {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter this intern's name: ",
          name: "internName",
        },
        {
          type: "number",
          message: "Enter this intern's employee ID: ",
          name: "internID",
        },
        {
          type: "input",
          message: "Enter this intern's email address: ",
          name: "internEmail",
        },
        {
          type: "input",
          message: "Enter this intern's school name: ",
          name: "internSchool",
        },
        {
          type: "list",
          message: "Select an option:",
          choices: ["Add Engineer", "Add Intern", "Team Completed!"],
          name: "addRole",
        },
      ])
      .then((res) => {
        // Creating variables
        let name = res.internName;
        let id = res.internID;
        let email = res.internEmail;
        let school = res.internSchool;
        // Creating new Intern object
        let intern1 = new Intern(name, id, email, school);
        // Adding html to the employees string
        employees += addToHTML(intern1);
        // If user chooses to add another role, rerun addRole function
        if (res.addRole === "Add Engineer" || res.addRole === "Add Intern") {
          return addRole(res.addRole);
        } // Generates page if user finishes building team
        else if (res.addRole === "Team completed!") {
          generateCSS();
          return generateHTML(employees);
        }
      });
    // Generates page if user finishes building team
  } else if (response === "Team completed!") {
    generateCSS();
    return generateHTML(employees);
  }
}

// Initialize the prompt function:
init();

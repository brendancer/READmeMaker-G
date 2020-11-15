const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      name: "myName",
      message: "Welcome to READMeMakeR! Please tell me your name:",
    },
    {
      type: "input",
      name: "email",
      message: "Please type in the following info: email address",
    },
    {
      type: "input",
      name: "linkedIn",
      message: "LinkedIn profile link",
    },
    {
      type: "input",
      name: "gitHub",
      message: "GitHub profile link",
    },
    {
      type: "input",
      name: "title",
      message: "Your Project Title",
    },
    {
      type: "input",
      name: "description",
      message: "Type in a description of your project",
    },
    {
      type: "input",
      name: "installation",
      message: "Type in your installation instructions",
    },
    {
      type: "input",
      name: "usage",
      message: "Type in your usage instructions",
    },

    {
      type: "list",
      name: "license",
      message: "Choose in your license",
      choices: ["MIT", "Boost", "Apache", "ISC"],
    },

    {
      type: "input",
      name: "contribution",
      message: "What rules do you have for contributions?",
    },
    {
      type: "input",
      name: "tests",
      message: "Type in your test instructions",
    },
  ])
  .then((response) => {
    const markDown = generateMarkdown(response);

    fs.writeFile("newRM.md", markDown, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("README generated");
      }
    });
  });

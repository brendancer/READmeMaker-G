const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      name: "myName",
      message: "Welcome to READMeMAKER! Please tell me your name:",
    },
    {
      type: "input",
      name: "email",
      message: "Please type in the following info: email address",
    },
    {
      type: "input",
      name: "phone",
      message: "Phone (formatted as you want it to appear)",
    },
    {
      type: "input",
      name: "linkedIn",
      message: "LinkedIn",
    },
    {
      type: "input",
      name: "gitHub",
      message: "GitHub",
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
      type: "input",
      name: "altLicense",
      message: "Type in your license",
    },
    {
      type: "input",
      name: "contributors",
      message: "Who contributed to your project?",
    },
    {
      type: "input",
      name: "tests",
      message: "Type in your test instructions",
    },
  ])
  .then((answers) => {
    console.log("answers", answers);
    const markDown = generateMarkdown(answers);
  });

//   //this is where the problem is:
// // // function to write README file
// fs.writeFile("newRM.md", markDown, err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("README generated");
//   }
// });

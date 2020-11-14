const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

inquirer.prompt(
  [
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
      name: "phone",
      message: "Phone (formatted as you want it to appear)",
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
      type: "expand",
      name: "license",
      message: "Type in your license",
      choices: [
        {
          key: "MIT",
          value:
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        },
        {
          key: "Apache",
          value:
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        },
        {
          key: "Boost",
          value:
            "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
        },
        {
          key: "IBM",
          value:
            "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
        },
      ],
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
  ].then((answers) => {
    console.log("answers", answers);
    const markDown = generateMarkdown(answers);

    fs.writeFile("newRM.md", markDown, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("README generated");
        console.log(answers);
      }
    });
  })
);

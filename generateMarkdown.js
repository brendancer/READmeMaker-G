// function to generate markdown for README
var badge;
function generateMarkdown(response) {
  switch (response.license) {
    case "MIT":
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;

    case "Boost":
      badge =
        "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;

    case "Apache":
      badge =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;

    case "ISC":
      badge =
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }

  return `# ${response.title}
##### *a project by* ${response.myName}




 ${badge}

  ### Table of Contents
  1. [Description of Project](#description)
  2. [Installation Instructions](#installation)
  3. [Usage Instructions](#usage)
  4. [Contribution Guidelines](#contribution)
  5. [Tests](#tests)

  
  ## *Description of Project* <a name="description"></a>

  ${response.description}

  ## *Installation Instructions* <a name="installation"></a>

  ${response.installation}

  ## *Usage Instructions* <a name="usage"></a>

  ${response.usage}

  ## *License*

  ${response.license}


  ## *Contribution Guidelines* <a name="contribution"></a>

  ${response.contribution}

  ## *Tests* <a name="tests"></a>

  ${response.tests}

  ## *Questions?*

  Contact the author at:
  *email:* ${response.email} 
  *linkedIn:*  ${response.linkedIn}
  *GitHub:*  ${response.gitHub}

  





`;
}

module.exports = generateMarkdown;

// function to generate markdown for README

function generateMarkdown(response) {
  return `###${response.title}

${response.license.value}

  // # Table of Contents
  // 1. [Description of Project](#description)
  // 2. [Installation Instructions](#installation)
  // 3. [Usage Instructions](#usage)
  // 4. [Contribution Guidelines](#contribution)
  // 5. [Tests](#tests)

  
  ## Description of Project <a name="description"></a>

  ${response.description}

  ## Installation Instructions <a name="installation"></a>

  ${response.installation}

  ## Usage Instructions <a name="usage"></a>

  ${response.usage}

  ## License

  ${response.license}


  ## Contribution Guidelines <a name="contribution"></a>

  ${response.contribution}

  ## Tests <a name="tests"></a>

  ${response.tests}

  





`;
}

module.exports = generateMarkdown;

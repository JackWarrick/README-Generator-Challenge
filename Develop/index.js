// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// Create an array of questions for user input
const createReadme = inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Please add the title of your program:',
    },
    {
      type: 'input',
      message: 'Please provide a description of your program:',
      name: 'description',
    },

    {
      type: 'input',
      message: 'Please provide installation instructions for your program:',
      name: 'installation',
    },

    {
      type: 'input',
      message: 'Please provide usage information for your program:',
      name: 'usage',
    },

    {
      type: 'input',
      message: 'Please provide contribution information for your program:',
      name: 'contributing',
    },

    {
      type: 'input',
      message: 'Please provide test instructions for your program:',
      name: 'tests',
    },

    {
      type: 'list',
      message: 'License:',
      name: 'license',
      choices: ['MIT License', 'Apache 2.0 License', 'BSD 3-Clause License', 'GNU GPL v3 License', 'ISC License', 'Mozilla Public License 2.0'],
    },

    {
      type: 'input',
      message: 'Please provide your GitHub username:',
      name: 'username',
    },

    {
      type: 'input',
      message: 'Please provide your email address:',
      name: 'email',
    },
  ])



  // Create a function to write README file
  .then((data) => {


    // Get badges with switch statement - used info from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba for badges
  const licenseBadge = (data) => {
      switch (data){
        case 'MIT License':
          return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        case 'Apache 2.0 License':
          return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        case 'BSD 3-Clause License':
          return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
        case  'GNU GPL v3 License':
          return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        case 'ISC License':
          return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
        case 'Mozilla Public License 2.0':
          return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      }
    }


 //README content   
 const README = `
${licenseBadge(data.license)}

# Title: ${data.title} 

## Table of Contents

* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [License](#license)

* [Questions](#questions)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## License

This application is covered under the ${data.license}.

## Questions

For more information, please reference my GitHub profile [here](https://github.com/${data.username}), or reach out to my email: ${data.email}.

`

// Use fs (file system) .writeFile to create the readme with the README content
fs.writeFile('README.md', README, (err) =>
   err ? console.log(err) : console.log('Success!')
    );
  }); 

// Create a function to initialize app
function init() {
createReadme;
}

// Function call to initialize app
init();
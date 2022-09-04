// // TODO: Include packages needed for this application
//DONE
// // TODO: Create an array of questions for user input
// const questions = [];
//DONE


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

// // Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// Create an array of questions for user input
inquirer
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
      choices: ['MIT License', 'Apache License 2.0', 'BSD License', 'GPL License', 'ISC License', 'Mozilla Public License 2.0'],
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



//       GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

  ])
  // TODO: Create a function to write README file
  .then((data) => {

const README = `



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

${data.license}

## Questions

For more information, please reference my GitHub profile [here](https://github.com/${data.username}), or reach out to my email: ${data.email}.



`



    fs.writeFile('README.md', README, (err) =>
   err ? console.log(err) : console.log('Success!')
    );
  }); 
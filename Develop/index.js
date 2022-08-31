// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your program?',
    },
    {
      type: 'input',
      message: 'Describe your program with as much detail as possible:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Who were the contributors of this program?',
      name: 'contributors',
    },
    {
        type: 'input',
        message: 'Please add the URL of the program',
        name: 'url',
      },
  ])
  .then((data) => {

const README = `
# Title
${data.title} 

# Description
${data.description}

# Contributors
${data.contributors}

# URL of program
${data.url}

`

    fs.writeFile('README.md', README, (err) =>
   err ? console.log(err) : console.log('Success!')
    );
  }); 
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message:'Enter the project Title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license for your project.',
            choices: ['MIT', 'Apache 2.0', 'BSD', 'GPL', 'MPL',]
        },
        {
          type: 'input',
          name: 'instal',
          message: 'What are the steps for installing this application?'  
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe the apps usage'
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your GitHub username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What should steps need to be taken to become a contributor?'
        },
    ];
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
};
// Function call to initialize app
init();
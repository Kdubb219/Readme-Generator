const inquirer = require('inquirer');
//import inquirer from "inquirer";
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'What is the name of your application?'
    },
    {
        name: 'author',
        message: 'Who is the author of your application?'
    },
    {
        name: 'User Story',
        message: 'As a developer, I want a README.md generator. So that I can quickly create a professional README for a new project'
    },
    {
        name: 'Acceptance Criteria',
        message: 'Given a command-line application that accepts user input. When I am prompted for information about my application repository. Then a high-quality, professional README.md is generated with the title of my project and sections entitled Description, table of contents, installation, usage. When I enter my project title'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) { console.log(err); }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        let data = `# ${answers.title}\n## ${answers.author}`;
        writeToFile('README.md', data);
    });
}

// Function call to initialize app
init();

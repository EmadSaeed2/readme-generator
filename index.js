const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require('./utils/questions');

// function to write README file
function writeToFile(filePath, data) {
    fs.writeFile(filePath, data, (error) => {
        if (error) {
            console.log(error);
        }
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // console.log(answers)
            const md = generateMarkdown(answers)
            const filePath = `./${answers.file_name}.md`
            writeToFile(filePath, md)
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log(error)
            }
        });
}

// function call to initialize program
init();

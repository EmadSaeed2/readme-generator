const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = require('./utils/questions');


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers)
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log(error)
            }
        });
}

// function call to initialize program
init();

const questions = [
    {
        name: 'file_name',
        message: 'What is the file name?',
        default: 'README'
    },
    {
        name: 'app_name',
        message: 'What is the application name?'
    },
    {
        name: 'github',
        message: 'What is your Github account?'
    },
    {
        name: 'email',
        message: 'What is your email address?'
    },
    {
        name: 'description',
        message: 'Please, write a description?'
    },
    {
        name: 'installation',
        message: 'How to install the app?'
    },
    {
        name: 'usage',
        message: 'What is the app usage?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license type?',
        choices: ['Apache', 'Boost', 'BSD', 'CC0', 'Eclipse Public License 1.0', 'GNU GPL v3', 'MIT', 'Mozilla', 'Perl', 'SIL', 'Zlib']
    },
    {
        name: 'contributing',
        message: 'Tell about contributing'
    },
    {
        name: 'tests',
        message: 'Tell about tests?',
    }
]

module.exports = questions;
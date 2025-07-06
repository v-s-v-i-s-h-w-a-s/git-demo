const figlet = require('figlet');
const chalk = require('chalk');
const { greet, calculateAge, formatDate } = require('./utils');

console.log(chalk.blue(figlet.textSync('Git Workshop', { horizontalLayout: 'full' })));

console.log(chalk.green('\n Welcome to the Git & GitHub Workshop!'));
console.log(chalk.yellow('This is a demo application for learning version control.\n'));

// Demo the utility functions
console.log(chalk.cyan('Demo Functions:'));
console.log('📝', greet('Workshop Participant'));
console.log('🎂', calculateAge(2000));
console.log('📅', formatDate(new Date()));

console.log(chalk.magenta('\n Ready to start learning Git and GitHub Actions!'));

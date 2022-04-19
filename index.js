const Employee = require('./javascript/employee');
const Manager = require('./javascript/manager');
const Engineer = require('./javascript/engineer');
const Intern = require('./javascript/intern');
const employeeArr = [];

const userInput = () => {
  return inquirer.prompt([
    {
      name:"team",
      type:"confirm",
      message:"Would you like to create a team?",
    },
    {
      name:"employeeType",
      type:"list",
      message:"Which of these employee types would you like to add?",
      choices:["engineer","intern"]
    }
  ])}

//a function to generate markdown for HTML
function generateHTML(answers) {
  // console.log(answers)
  return  
};

module.exports = generateHTML;

const init = () => {
  userInput()
  .then((answers) => fs.writeFileSync('./dist/renderedoutput.HTML', generateHTML(answers)))
  .then(() => console.log('Successfully wrote to HTML'))
  .catch((err) => console.error(err));
};
init();
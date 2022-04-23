const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const employeeArr = []
const {createManagerCard, createEngineerCard, createInternCard, footerHolder, headerHolder} = require('./src/generateHTML')

//This is first question you're asked
const managerInput = () => {
  return inquirer.prompt([
    {
      name:"name",
      type:"input",
      message:"What is your manager's name?",
    },
    {
      name:"id",
      type:"input",
      message:"Please enter your manager's employee ID number.",
    },
    {
      name:"email",
      type:"input",
      message:"Please enter your manager's e-mail address."
    },
    {
      name:"officeNumber",
      type:"input",
      message:"Please enter your manager's office number."
    },
    //creates a new manager item that is pushed into the employee array. Then asked the employee type function.
  ]).then(answers=>{
    const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
    employeeArr.push(manager);
    employeeTypeInput();
  })
};
//asks questions about engineer then pushes answers to employee array. Asks employee type function.
  const engineerInput = () => {
    return inquirer.prompt([
  {
    name:"name",
    type:"input",
    message:"Please enter your engineer's name.",
  },
  {
    name:"id",
    type:"input",
    message:"Please enter your engineer's ID number.",
  },
  {
    name:"email",
    type:"input",
    message:"Please enter your engineer's e-mail address.",
  },
  {
    name:"gitHub",
    type:"input",
    message:"Please enter your engineer's GitHub username.",
  },
    ]) .then(answers=>{
      const engineer = new Engineer (answers.name, answers.id, answers.email, answers.gitHub);
      employeeArr.push(engineer);
      employeeTypeInput();
  })
  };
// Asks questions about interns. Pushes answers to array. Runs employeeType function. 
    const internInput = () => {
      return inquirer.prompt([
  {
    name:"name",
    type:"input",
    message:"Please enter your intern's name.",
  },
  {
    name:"id",
    type:"input",
    message:"Please enter your intern's ID number.",
  },
  {
    name:"email",
    type:"input",
    message:"Please enter your intern's e-mail address.",
  },
  {
    name:"school",
    type:"input",
    message:"Please enter the name of your intern's school.",
  },
]).then(answers=>{
  const intern = new Intern (answers.name, answers.id, answers.email, answers.school);
  employeeArr.push(intern);
  employeeTypeInput();
})
};
//This function is run after every employee's questions are answered.
//If you select to add another engineer or intern it will take you to their appropriate functions,
//if you select finish building my team it will run the sendIt function.
const employeeTypeInput = () => {
  return inquirer.prompt([
{
  name:"employeeType",
  type:"list",
  message:"Would you like to add another employee or to finish building your team?",
  choices:["Engineer","Intern","I'm Finished Building My Team"],
},
  ]).then (continueBuilding => {
  switch (continueBuilding.employeeType) {
    case "Engineer":
      engineerInput();
      break;
    case "Intern":
      internInput();
      break;
    case "I'm Finished Building My Team":
    sendIt();
      break;
}});
//This function takes writes the html file titled renderedOutput into the dist folder and
//utilizes the teamBuilder function to do so.
function sendIt (){
  fs.writeFileSync('./dist/renderedOutput.html', teamBuilder(),(err) => {
    if(err) {
      console.log(err);
    } else (console.log('done!'));
  });
}}
//creates new array, pushes html block headerHolder from generateHTML.js
//for loop runs thru all employees in employeeArr that were selected during questioning.
//if the role selected for the employee is manager it will use the create manager card function to
//push a block of html with information from the answered questions into the array.
//same thing happens with if the employee is an engineer or intern, but with their respective information.
function teamBuilder() {
  const team = []
  team.push(headerHolder);
  for (let i = 0; i < employeeArr.length; i++) {
      const element = employeeArr[i];
      if (element.getRole() == 'Manager'){
        const managerCard = createManagerCard(element)
          team.push(managerCard);
      }else if (element.getRole() == 'Engineer'){
        const engineerCard = createEngineerCard(element);
          team.push(engineerCard);
      } else if (element.getRole() == 'Intern'){
        const internCard = createInternCard(element);
          team.push(internCard);
      }
  }
  //takes the array and adds the footer / finalizing html block into it.
  //uses join function to join the strings together.
  team.push(footerHolder);
  return team.join('');
}
//this initializes the whole questioning process by running the managerInput function.
const init = () => {
  managerInput()
};
init();
//exporting employeeArr and teamBuilder function so they can be used on other pages.
module.exports = {employeeArr, teamBuilder}
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const employeeArr = []
// const htmlStarter = require('./src/generateHTML');
// const createManagerCard = require('./src/generateHTML');
// const createEngineerCard = require('./src/generateHTML');
// const createInternCard = require('./src/generateHTML');
// const htmlEnder = require('./src/generateHTML');
const {createManagerCard, createEngineerCard, createInternCard, htmlEnder, htmlStarter, footerHolder, headerHolder} = require('./src/generateHTML')
// const teamBuilder = require('./src/generateHTML')


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
  ]).then(answers=>{
    // console.log(answers);
    const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
    // console.log(manager);
    employeeArr.push(manager);
    // console.log(employeeArr);
    employeeTypeInput();
  })
};

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
      // console.log(answers);
      const engineer = new Engineer (answers.name, answers.id, answers.email, answers.gitHub);
      // console.log(engineer);
      employeeArr.push(engineer);
      // console.log(employeeArr);
      employeeTypeInput();
  })
  };

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
  // console.log(answers);
  const intern = new Intern (answers.name, answers.id, answers.email, answers.school);
  // console.log(intern);
  employeeArr.push(intern);
  // console.log(employeeArr);
  employeeTypeInput();
})
};

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

function sendIt (){
  console.log(teamBuilder())
  fs.writeFileSync('./dist/renderedOutput.html', teamBuilder(),(err) => {
    if(err) {
      console.log(err);
    } else (console.log('done!'));
  });
}}

function teamBuilder() {
  const team = []
  team.push(headerHolder);
  // console.log(htmlStarter)
  for (let i = 0; i < employeeArr.length; i++) {
      const element = employeeArr[i];
      console.log(element);
      if (element.getRole() == 'Manager'){
        const managerCard = createManagerCard(element)
        // console.log(managerCard);
          team.push(managerCard);
          // console.log(createManagerCard)
      }else if (element.getRole() == 'Engineer'){
        const engineerCard = createEngineerCard(element);
          team.push(engineerCard);
          // console.log(createEngineerCard)
      } else if (element.getRole() == 'Intern'){
        const internCard = createInternCard(element);
          team.push(internCard);
          // console.log(createInternCard);
      }
  }
  team.push(footerHolder);
  console.log(team)
  return team.join('');
  // console.log(team.join(''));
}


const init = () => {
  managerInput()
};
init();

module.exports = {employeeArr, teamBuilder}
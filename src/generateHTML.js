const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const inquirer = require('inquirer');
const employeeArr = require('../index.js')

// function teamBuilder() {
//     const team = []
//     team.push(htmlStarter());
//     for (let i = 0; i < employeeArr.length; i++) {
//         const element = employeeArr[i];
//         if (element.getRole() == 'Manager'){
//             team.push(createManagerCard());
//         }else if (element.getRole == 'Engineer'){
//             team.push(createEngineerCard());
//         } else if (element.getRole() == 'Intern'){
//             team.push(createInternCard());
//         }
//     }
//     team.push(htmlEnder());
//     return team.join('')
// }

function htmlStarter(){
    return
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
  <link rel="stylesheet" href="./dist/styles.css">
  <title>Team Builder</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
  <h1 class="display-4">Fluid jumbotron</h1>
  <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
</div>
</div>`
}

function htmlEnder() {
    return
`<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
<body>`
}

function createManagerCard(manager) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-header" id="title">
      Manager
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item name">${manager.getName()}</li>
      <li class="list-group-item email" href="mailto:${manager.getEmail()}">${manager.getEmail()}</li>
      <li class="list-group-item emID">${manager.getId()}</li>
      <li class="list-group-item extra">${manager.getOfficeNumber()}</li>
    </ul>
    </div>`
};

function createEngineerCard() {
    return `<div class="card" style="width: 18rem;">
    <div class="card-header" id="title">
      Engineer
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item name">${Engineer.getName()}</li>
      <li class="list-group-item email" href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</li>
      <li class="list-group-item emID">${Engineer.getId()}</li>
      <li class="list-group-item extra">${Engineer.getgitHub()}</li>
    </ul>
    </div>`
};

function createInternCard() {
    return `<div class="card" style="width: 18rem;">
    <div class="card-header" id="title">
      Intern
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item name">${Intern.getName()}</li>
      <li class="list-group-item email" href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</li>
      <li class="list-group-item emID">${Intern.getId()}</li>
      <li class="list-group-item extra">${Intern.getSchool()}</li>
    </ul>
    </div>`
};

// module.exports = teamBuilder();
module.exports =  {
  htmlStarter, htmlEnder, createManagerCard, createEngineerCard, createInternCard
}
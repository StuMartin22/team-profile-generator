//create const that holds boiler plate beginning html info.
const headerHolder=
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
  <link rel="stylesheet" href="./styles.css">
  <title>Team Builder</title>
</head>
<body class="bg-secondary">
<div class="jumbotron jumbotron-fluid bg-dark text-white">
  <div class="container">
  <h1 class="display-4">Team Generator</h1>
  <p class="lead">Below is the team and their information:</p>
</div>
</div>
<div class="container-fluid">
    <div class="row">`
//create const that holds boiler plate footer hmtl info.
const footerHolder = `</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
</body>`
//card html block with information from each manager added to team.
function createManagerCard(manager) {
    return `
    <div class="card" style="width: 33%">
    <div class="card-header font-weight-bold bg-primary" id="title">
      Manager
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item bg-light name">${manager.getName()}</li>
      <li class="list-group-item bg-light email" href="mailto:${manager.getEmail()}">${manager.getEmail()}</li>
      <li class="list-group-item bg-light emID">${manager.getId()}</li>
      <li class="list-group-item bg-light extra">${manager.getOfficeNumber()}</li>
    </ul>
    </div>`
};
//card html block with information from each engineer added to team.
function createEngineerCard(engineer) {
    return `
    <div class="card" style="width: 33%">
    <div class="card-header font-weight-bold bg-primary" id="title">
      Engineer
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item bg-light name">${engineer.getName()}</li>
      <li class="list-group-item bg-light email" href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</li>
      <li class="list-group-item bg-light emID">${engineer.getId()}</li>
      <li class="list-group-item bg-light extra">${engineer.getgitHub()}</li>
    </ul>
    </div>`
};
//card html block with information from each intern added to team.
function createInternCard(intern) {
    return `
    <div class="card" style="width: 33%">
    <div class="card-header font-weight-bold bg-primary" id="title">
      Intern
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item bg-light name">${intern.getName()}</li>
      <li class="list-group-item bg-light email" href="mailto:${intern.getEmail()}">${intern.getEmail()}</li>
      <li class="list-group-item bg-light emID">${intern.getId()}</li>
      <li class="list-group-item bg-light extra">${intern.getSchool()}</li>
    </ul>
    </div>`
};
//exporting all above functions and variables for use in index.js file.
module.exports =  {
  createManagerCard, createEngineerCard, createInternCard, headerHolder, footerHolder
}
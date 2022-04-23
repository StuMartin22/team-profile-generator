//imports employee class
const Employee = require("./employee");
//takes all information employee has and adds school to the list.
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  //this is the function that will return the school response for intern.
  getSchool() {
      return this.school;
  }
};
//exports intern class so it can be used by other files.
module.exports = Intern
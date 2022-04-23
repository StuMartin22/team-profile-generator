//imports Employee class
const Employee = require("./employee");
//extends Employee class to include officeNumber of manager + original info from Employee.
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  //manager specific function to return manager officeNumber
  getOfficeNumber() {
      return this.officeNumber;
  }
};
//exports manager class so it can be used by other files.
module.exports = Manager
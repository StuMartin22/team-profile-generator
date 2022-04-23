//declares and defines a class that holds the name, id, and email information.
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //function will return the name of whatever employee is entered.
  getName() {
    return this.name;
  }
  //function will return the id of whatever employee is entered.
  getId() {
    return this.id;
  }
  //function will return the email of whatever employee is entered.
  getEmail() {
    return this.email;
  }
  //function will return the role/job type of whatever employee is entered.
  getRole() {
    return "employee";
  }
}
//exports employee class so it can be accessed by other files.
module.exports=Employee
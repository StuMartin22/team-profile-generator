//requires employee import to use that information.
const Employee = require("./employee");
//Engineer class uses information from employee class and then adds its own information
class Engineer extends Employee {
  constructor(name, id, email, gitHub ) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  getRole() {
    return "Engineer";
  }
  //returns information specifically for Engineer job type.
  getgitHub() {
      return this.gitHub;
  }
};
//exports engineer class so it can be used by other files.
module.exports = Engineer
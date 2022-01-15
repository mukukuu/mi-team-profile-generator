//INPORT PROTOTYPE
const Employee = require('./Employee');


//MANAGER CONSTRUCTOR
class Engineer extends Employee {
    constructor (name, id, email, github) {
        //import parent
        super (name, id, email);
        this.github = github;

    }
    //manager's new method
    getRole() {
       return "Engineer";
   }
   //get github
    getGithub() {
       return this.github;
   }
}



module.exports = Engineer;
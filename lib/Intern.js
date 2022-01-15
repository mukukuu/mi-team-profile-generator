//INPORT PROTOTYPE
const Employee = require('./Employee');


//MANAGER CONSTRUCTOR
class Intern extends Employee {
    constructor (name, id, email, school) {
        //import parent
        super (name, id, email);
        this.school = school;

    }
    //manager's new method
    getRole() {
       return "Intern";
   }
   //get school
    getSchool() {
       return this.school;
   }
}



module.exports = Intern;
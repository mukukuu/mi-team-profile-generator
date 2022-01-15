//INPORT PROTOTYPE
const Employee = require('./Employee');


//MANAGER CONSTRUCTOR
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //import parent
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    //manager's new method
    getRole() {
       return "Manager";
   }
   //get officenumber
   getOfficeNum() {
       return this.officeNumber;
   }
}



module.exports = Manager;
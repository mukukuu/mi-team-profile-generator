//INPORT PROTOTYPE
const Employee = require('./Employee');


//MANAGER CONSTRUCTOR
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super ();
        this.officeNumber = officeNumber;
    }
    //manager's new method
    getRole () {
        return "Manager";
 }

}

module.exports = Manager;
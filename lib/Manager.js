
const Employee = require('./Employee');


class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        if (typeof officeNumber !== 'number') {
            throw new Error('officeNumber must be a number');
        }
        

        super(name, id, email);
        this.officeNumber = officeNumber;
     
        this.role = "Manager";
        this.icon = '<i class="bi bi-megaphone"></i>';
        this.customTrait = `<span>Office #: </span>${this.officeNumber}`;  
   




    }



}


module.exports = Manager;



// manager(officeNumber) {


//     if (typeof officeNumber !== 'number') {
//         throw new Error('officeNumber must be a number');
//     }

//     this.officeNumber = officeNumber;
//     this.role = "Manager";

// }
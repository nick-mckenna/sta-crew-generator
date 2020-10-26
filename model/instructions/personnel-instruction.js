'use strict';

class PersonnelInstruction {

    number = 0;
    character = null;

}

const validatePersonnelInstruction = (personnelInstruction) => {

    if (personnelInstruction === undefined) {
        throw 'personnelInstruction is undefined';
    } else if (personnelInstruction === null) {
        throw 'personnelInstruction is null';
    } else if (personnelInstruction.character === undefined) {
        throw 'personnelInstruction.character is undefined';
    } else if (personnelInstruction.character === null) {
        throw 'personnelInstruction.character is null';
    } else if (personnelInstruction.number === undefined) {
        throw 'personnelInstruction.number is undefined';
    } else if (personnelInstruction.number === null) {
        throw 'personnelInstruction.number is null';
    }

}

module.exports.validatePersonnelInstruction = validatePersonnelInstruction;
module.exports.PersonnelInstruction = PersonnelInstruction;
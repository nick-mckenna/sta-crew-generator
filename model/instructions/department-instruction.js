'use strict';

class DepartmentInstruction {

    name = "";
    personnel = [];

}

const validateDepartmentInstruction = (departmentInstruction) => {

    if (departmentInstruction === undefined) {
        throw 'departmentInstruction is undefined';
    } else if (departmentInstruction === null) {
        throw 'departmentInstruction is null';
    } else if (departmentInstruction.name === undefined) {
        throw 'departmentInstruction.name is undefined';
    } else if (departmentInstruction.name === null) {
        throw 'departmentInstruction.name is null';
    } else if (departmentInstruction.personnel === undefined) {
        throw 'departmentInstruction.personnel is undefined';
    } else if (departmentInstruction.personnel === null) {
        throw 'departmentInstruction.personnel is null';
    }

}

module.exports.DepartmentInstruction = DepartmentInstruction;
module.exports.validateDepartmentInstruction = validateDepartmentInstruction;
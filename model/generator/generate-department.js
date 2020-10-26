'use strict';

const { GeneratedDepartment } = require("../crew/generated-department");
const { validateDepartmentInstruction } = require("../instructions/department-instruction");
const { generatePersonnel } = require("./generate-personnel");

const generateDepartment = (departmentInstruction) => {

    validateDepartmentInstruction(departmentInstruction);

    const generatedDepartment = new GeneratedDepartment(departmentInstruction.name);

    departmentInstruction.personnel.forEach(personnel => {
        
        generatedDepartment.personnel.push(generatePersonnel(personnel));

    });

    return generatedDepartment;
}

module.exports.generateDepartment = generateDepartment;
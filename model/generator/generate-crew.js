'use strict';

const { GeneratedCrew } = require("../crew/generated-crew");
const { validateGenerateInstruction } = require("../instructions/generate-instruction");
const { generateDepartment } = require("./generate-department");

const generateCrew = (generateInstruction) => {

    validateGenerateInstruction(generateInstruction);

    const generatedCrew = new GeneratedCrew();

    generateInstruction.departments.forEach(departmentInstruction => {
        
        generatedCrew.departments.push(generateDepartment(departmentInstruction));

    });

    return generatedCrew;
}

module.exports.generateCrew = generateCrew;
'use strict';

class GenerateInstruction {

    departments = [];

}

const validateGenerateInstruction = (generateInstruction) => {

    if (generateInstruction === undefined) {
        throw 'generateInstuction is undefined';
    } else if (generateInstruction === null) {
        throw 'generateInstuction is null';
    } else if (generateInstruction.departments === undefined) {
        throw 'generateInstuction.departments is undefined';
    } else if (generateInstruction.departments === null) {
        throw 'generateInstuction.departments is null';
    }

}

module.exports.GenerateInstruction = GenerateInstruction;
module.exports.validateGenerateInstruction = validateGenerateInstruction;
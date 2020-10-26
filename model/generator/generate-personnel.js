'use strict';

const { GeneratedPersonnel } = require("../crew/generated-personnel");
const { validatePersonnelInstruction } = require("../instructions/personnel-instruction");
const { generateCharacter } = require("./character-generation/generate-character");

const generatePersonnel = (personnelInstruction) => {

    validatePersonnelInstruction(personnelInstruction);

    const generatedPersonnel = new GeneratedPersonnel();

    for (let i = 0; i < personnelInstruction.number; i++) {

        generatedPersonnel.characters.push(generateCharacter(personnelInstruction.character));
    }

    return generatedPersonnel;
}

module.exports.generatePersonnel = generatePersonnel;
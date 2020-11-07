'use strict';

const { GeneratedPersonnel } = require("../crew/generated-personnel");
const { validatePersonnelInstruction } = require("../instructions/personnel-instruction");
const { generateCharacter } = require("./character-generation/generate-character");

const generatePersonnel = (personnelInstruction) => {

    validatePersonnelInstruction(personnelInstruction);

    const generatedPersonnel = new GeneratedPersonnel();

    let created = 0;

    while (created < personnelInstruction.number) {

        // Note: candidate may be null if it could not be generated according to the rules,
        //       so have another go until we get a valid character.
        const candidate = generateCharacter(personnelInstruction.character);
        if (candidate != null) {
            generatedPersonnel.characters.push(candidate);
            created++;
        }
    }

    return generatedPersonnel;
}

module.exports.generatePersonnel = generatePersonnel;
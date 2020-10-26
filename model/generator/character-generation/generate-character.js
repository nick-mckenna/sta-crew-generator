'use strict';

const { Character } = require("../../characters/character");
const { validateCharacterInstruction } = require("../../instructions/character-instruction");
const { generateSpecies } = require("./generate-species");

const generateCharacter = (characterInstruction) => {

    validateCharacterInstruction(characterInstruction);

    let character = generateSpecies(new Character(characterInstruction.mainCharacter));

    // TODO: At end of process, make sure we are within attribute / discipline boundaries
    
    // TODO: Make sure that the character has high enough disciplines for their Talents

    return character;
}

module.exports.generateCharacter = generateCharacter;
'use strict';

const { Character } = require("../../characters/character");
const { validateCharacterInstruction } = require("../../instructions/character-instruction");
const { generateSpecies } = require("./generate-species");
const { generateEnvironment } = require("./generate-environment");
const { generateUpbringing } = require("./generate-upbringing");

const generateCharacter = (characterInstruction) => {

    validateCharacterInstruction(characterInstruction);

    let character = new Character(characterInstruction.mainCharacter);
    character = generateSpecies(character);
    character = generateEnvironment(character);
    character = generateUpbringing(character);
    ;

    // TODO: At end of process, make sure we are within attribute / discipline boundaries
    
    // TODO: Make sure that the character has high enough disciplines for their Talents

    return character;
}

module.exports.generateCharacter = generateCharacter;
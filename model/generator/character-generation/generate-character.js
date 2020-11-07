'use strict';

const { Character } = require("../../characters/character");
const { validateCharacterInstruction } = require("../../instructions/character-instruction");
const { generateSpecies } = require("./generate-species");
const { generateEnvironment } = require("./generate-environment");
const { generateUpbringing } = require("./generate-upbringing");
const { generateAcademyTrack } = require("./generate-academy-track");
const { generateCareer } = require("./generate-career");
const { trimCharacter } = require("../trim-character");
const { generateCareerEvent } = require("./generate-career-event");

const generateCharacter = (characterInstruction) => {

    validateCharacterInstruction(characterInstruction);

    let character = new Character(characterInstruction.mainCharacter);
    character = generateSpecies(character);
    character = generateEnvironment(character);
    character = generateUpbringing(character);
    character = generateAcademyTrack(character);
    character = generateCareer(character);
    character = generateCareerEvent(character);

    // TODO: At end of process, make sure we are within attribute / discipline boundaries
    
    // TODO: Make sure that the character has high enough disciplines for their Talents

    // Note: Remove the trimCharacter call if you want to get a bit more debug information
    // about why the character is the way that it is
    character = trimCharacter(character);

    return character;
}

module.exports.generateCharacter = generateCharacter;
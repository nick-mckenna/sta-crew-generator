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
const { generateFinalTouches } = require("./generate-final-touches");

const generateCharacter = (characterInstruction) => {

    validateCharacterInstruction(characterInstruction);

    let character = new Character(characterInstruction.mainCharacter);
    character = generateSpecies(character);
    character = generateEnvironment(character);
    character = generateUpbringing(character);
    character = generateAcademyTrack(character);
    character = generateCareer(character);
    character = generateCareerEvent(character);
    character = generateFinalTouches(character);


    // TODO: Add a call to test character here to make sure everything is working as expected
    // character = testCharacter(character);


    // TODO: If we cannot successfully test a character (which is possible if we couldn't generate all the data we needed)
    //       then return null and the caller should decide what to do about it.


    // Note: Remove the trimCharacter call if you want to get a bit more debug information
    // about why the character is the way that it is
    character = trimCharacter(character);

    return character;
}

module.exports.generateCharacter = generateCharacter;
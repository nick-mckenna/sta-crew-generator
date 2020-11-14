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
const { testCharacter } = require("./../test-character");
const { finalSpec } = require("../test-specs/final-spec");
const { speciesSpec } = require("../test-specs/species-spec");
const { environmentSpec } = require("../test-specs/environment-spec");
const { upbringingSpec } = require("../test-specs/upbringing-spec");
const { academyTrackSpec } = require("../test-specs/academy-track-spec");
const { careerSpec } = require("../test-specs/career-spec");
const { careerEventSpec } = require("../test-specs/career-event-spec");

const generateCharacter = (characterInstruction) => {

    validateCharacterInstruction(characterInstruction);

    let character = new Character(characterInstruction.mainCharacter);

    character = generateSpecies(character);
    testCharacter(character, speciesSpec, 'Species');

    character = generateEnvironment(character);
    testCharacter(character, environmentSpec, 'Environment');

    character = generateUpbringing(character);
    testCharacter(character, upbringingSpec, 'Upbringing');

    character = generateAcademyTrack(character);
    testCharacter(character, academyTrackSpec, 'Academy Track');

    character = generateCareer(character);
    testCharacter(character, careerSpec, 'Career');

    character = generateCareerEvent(character);
    testCharacter(character, careerEventSpec, 'Career Event');

    character = generateFinalTouches(character);

    // Add a call to test character here to make sure everything is working as expected
    const finalCharacter = testCharacter(character, finalSpec, 'Final');

    if (finalCharacter == null) {

        return character;

    } else {
        
        // Note: Remove the trimCharacter call if you want to get a bit more debug information
        // about why the character is the way that it is
        character = trimCharacter(finalCharacter);

        return character;
    }    
}

module.exports.generateCharacter = generateCharacter;
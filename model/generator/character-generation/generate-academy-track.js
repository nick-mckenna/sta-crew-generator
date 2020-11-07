'use strict';

const { deepClone, getRandomInt } = require('../../misc');
const { modifyAttributes, modifyAttribute } = require('./attribute-modifier');
const { modifyDiscipline } = require('./discipline-modifier');
const { randomValue } = require('../../characters/values/value-repository');
const { randomAcademyTrack } = require('../../characters/academy-tracks/academy-track-repository');
const { randomAttribute } = require('../../characters/character-attributes');
const { randomDiscipline, randomDisciplineExcluding } = require('../../characters/character-disciplines');
const { randomSelection } = require('../random-generator');

const generateAcademyTrack = (sourceCharacter) => {

    let character = deepClone(sourceCharacter);

    const academyTrack = randomAcademyTrack();

    character.academyTrackName = academyTrack.name;

    // 1. Generate value
    character.values = randomValue(character.values);

    // 2. Update attributes
    let remainingPoints = 3;
    while (remainingPoints > 0) {

        const nextAttribute = randomAttribute();
        const increment = getRandomInt(remainingPoints) + 1;

        character = modifyAttribute(character, nextAttribute, increment);

        remainingPoints -= increment;
    }

    // 3. Update major discipline
    const majors = academyTrack.majors;
    let found = false;
    let count = 0;
    let major = null;
    while (found == false) {
        major = majors[getRandomInt(majors.length)];
        const revisedCharacter = modifyDiscipline(character, major, 2, 4);
        if (revisedCharacter != null) {
            character = revisedCharacter;
            found = true;
        }

        count++;

        // Have twenty goes and then accept whatever result comes back even if
        // it breaks the max 4 rule
        if (count == 20 && found == false) {
            found = true;
            character = revisedCharacter;
        }
    }
    character.major = major;

    // 4. Update minor disciplines
    let excludes = [ major ];
    const minor1 = randomDisciplineExcluding(excludes);
    excludes = [...excludes, ...minor1];
    const minor2 = randomDisciplineExcluding(excludes);
    character.minors = [ minor1, minor2 ];

    // 5. Generate focus
    const focus = randomSelection(academyTrack.focusOptions, character.focuses);
    character.focuses = [...character.focuses, ...focus];

    character.academyTrack = academyTrack;

    return character;
}

module.exports.generateAcademyTrack = generateAcademyTrack;
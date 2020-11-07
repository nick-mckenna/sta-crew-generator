'use strict';

const { deepClone } = require('../../misc');
const { randomCareer } = require('../../characters/careers/career-repository');
const { randomValue } = require('../../characters/values/value-repository');
const { generateTalent } = require('./generate-talent');

const generateCareer = (sourceCharacter) => {

    let character = deepClone(sourceCharacter);

    const career = randomCareer();

    character.careerName = career.name;

    // 1. Generate a random value
    character.values = randomValue(character.values);

    // 2. Add a talent
    let talent = career.talent;
    if (career.talent == null) {
        talent = generateTalent(character, character.species.talents);
    }
    character.talents = [...character.talents, ...[talent]];

    character.career = career;

    return character;
}

module.exports.generateCareer = generateCareer;
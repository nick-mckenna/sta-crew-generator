'use strict';

const { deepClone, getRandomInt } = require('../../misc');
const { modifyAttributes, modifyAttribute } = require('./attribute-modifier');
const { modifyDiscipline } = require('./discipline-modifier');
const { randomUpbringing } = require('../../characters/upbringings/upbringing-repository');
const { randomAcceptanceOption, acceptanceOptions } = require('../../characters/upbringings/upbringing');
const { generateTalent } = require('./generate-talent');

const generateUpbringing = (sourceCharacter) => {

    let character = deepClone(sourceCharacter);

    const upbringing = randomUpbringing();

    character.upbringingName = upbringing.name;
    character.upbringingStatus = randomAcceptanceOption();

    // 1. Update attributes
    let attributesToUpdate = null;
    if (character.upbringingStatus === acceptanceOptions().accepted) {
        attributesToUpdate = upbringing.acceptedAttributesToIncrease;
    } else {
        attributesToUpdate = upbringing.rebelledAttributesToIncrease;
    }
    character = modifyAttributes(character, attributesToUpdate);
    
    // 2. Update one of the disciplines
    const disciplineOptions = upbringing.disciplinesToIncrease();
    const disciplineToIncrease = disciplineOptions[getRandomInt(disciplineOptions.length)];
    character = modifyDiscipline(character, disciplineToIncrease);

    // 3. Generate a random focus
    const focusOptions = upbringingName.focusOptions;
    const selectedFocus = focusOptions[getRandomInt(focusOptions.length)];
    character.focuses = [...character.focuses, ...[selectedFocus]];

    // 4. Generate a random talent
    character.talents = [...character.talents, ...[generateTalent(character, character.species.talents)]];

    character.upbringing = upbringing;

    return character;
}

module.exports.generateUpbringing = generateUpbringing;
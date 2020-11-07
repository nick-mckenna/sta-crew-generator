'use strict';

const { deepClone } = require('../../misc');
const { randomCareerEvent } = require('../../characters/career-events/career-event-repository');
const { randomSelection } = require('../random-generator');
const { modifyAttribute } = require('./attribute-modifier');
const { modifyDiscipline } = require('./discipline-modifier');

const generateCareerEvent = (sourceCharacter) => {

    let character = deepClone(sourceCharacter);

    let excludes = [];
    const numberEvents = 2;

    for (let i = 0; i < numberEvents; i++) {

        const nextEvent = randomCareerEvent(excludes);
        excludes = [...excludes, ...[nextEvent]];

        // 1. Increase attribute
        character = modifyAttribute(character, nextEvent.attribute, 1);
        
        // 2. Increase discipline
        character = modifyDiscipline(character, nextEvent.discipline, 1);
        
        // 3. Add a random focus
        const focus = randomSelection(nextEvent.focuses, character.focuses);
        character.focuses = [...character.focuses, ...[focus]];

        character.careerEvents = [...character.careerEvents, ...[nextEvent]];
        character.careerEventNames = [...character.careerEventNames, ...[nextEvent.name]];
    }

    return character;
}

module.exports.generateCareerEvent = generateCareerEvent;
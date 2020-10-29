'use strict';

const { deepClone } = require('../../misc');
const { randomEnvironment } = require('../../characters/environments/environment-repository');
const { modifyAttributes, modifyAttribute } = require('./attribute-modifier');
const { modifyDiscipline } = require('./discipline-modifier');
const { randomValue } = require('../../characters/values/value-repository');

const generateEnvironment = (sourceCharacter) => {

    let character = deepClone(sourceCharacter);

    const environment = randomEnvironment();

    character.environmentName = environment.name;

    // 1. Update one of the attributes
    const attributeToIncrease = environment.getAttributeToIncrease(character.species);
    character = modifyAttribute(character, attributeToIncrease);
    
    // 2. Update one of the disciplines
    const disciplineToIncrease = environment.getDisciplineToIncrease(character.species);
    character = modifyDiscipline(character, disciplineToIncrease);

    // 3. Generate a random value
    character.values = [...character.values, ...[randomValue()]];

    character.environment = environment;

    return character;
}

module.exports.generateEnvironment = generateEnvironment;
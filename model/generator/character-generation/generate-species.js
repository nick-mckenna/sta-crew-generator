'use strict';

const { randomSpecies } = require('../../characters/species/species-repository');
const { deepClone } = require('../../misc');
const { generateTalent } = require('./generate-talent');
const { modifyAttributes } = require('./attribute-modifier');

const generateSpecies = (sourceCharacter) => {

    let character = deepClone(sourceCharacter);

    const species = randomSpecies();
    const gender = species.generateGender();
    
    character.speciesName = species.name;
    character.gender = gender.name;
    character.name = species.generateName(gender.name);
    character.traits = [...character.traits, ...species.traits];

    if (species.speciesTalentRequired) {    // e.g. for Betazoids
        character.talents = [...character.talents, ...[species.generateSpeciesTalent(character)]];
    } else {
        character.talents = [...character.talents, ...[generateTalent(character, species.talents)]];
    }

    character = modifyAttributes(character, species.attributesToChange);

    character.species = species;

    return character;
}

module.exports.generateSpecies = generateSpecies;
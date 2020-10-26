'use strict';

const { randomSpecies } = require('../../characters/species/species-repository');
const { deepClone } = require('../../misc');

const generateSpecies = (sourceCharacter) => {

    let character = deepClone(sourceCharacter);

    const species = randomSpecies();
    const gender = species.generateGender();

    character.species = species;
    character.speciesName = species.name;
    character.gender = gender.name;
    character.name = species.generateName(gender.name);
    character.traits = [...character.traits, ...species.traits];
    character.talents = [...talents, ...generateTalent(character)];

    character = modifyAttributes(character, species.attributesToChange);

    return character;
}

module.exports.generateSpecies = generateSpecies;
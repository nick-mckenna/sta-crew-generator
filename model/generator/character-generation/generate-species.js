'use strict';

const { getAllSpecies } = require('../../characters/species/species-repository');
const { getRandomInt } = require('../../misc');

const generateSpecies = () => {

    const allSpecies = getAllSpecies();

    const numberSpecies = allSpecies.length;

    const selected = getRandomInt(numberSpecies);

    return allSpecies[selected];
}

module.exports.generateSpecies = generateSpecies;
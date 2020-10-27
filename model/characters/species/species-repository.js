'use strict';

const { getRandomInt } = require("../../misc");
const { andorian } = require("./andorian");

const getAllSpecies = () => {

    return [
        andorian()
    ];
    
}

const randomSpecies = () => {

    const allSpecies = getAllSpecies();

    const numberSpecies = allSpecies.length;

    const selected = getRandomInt(numberSpecies);

    return allSpecies[selected];
}

module.exports.randomSpecies = randomSpecies;
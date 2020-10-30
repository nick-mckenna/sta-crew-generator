'use strict';

const { getRandomInt } = require("../../misc");
const { andorian } = require("./andorian");
const { bajoran } = require("./bajoran");
const { betazoid } = require("./betazoid");
const { denobulan } = require("./denobulan");
const { human } = require("./human");
const { tellarite } = require("./tellarite");
const { trill } = require("./trill");
const { vulcan } = require("./vulcan");

const getSpeciesDistribution = () => {

    return [
        /*
        andorian(),
        andorian(),
        bajoran(),
        bajoran(),
        betazoid(),
        betazoid(),
        denobulan(),
        denobulan(),
        human(),
        human(),
        human(),
        human(),
        human(),
        human(),
        tellarite(),
        tellarite(),
        trill(),
        trill(),
        vulcan(),
        vulcan()
        */
       human()
    ];
    
}

const getAllSpecies = () => {

    return [
        
        andorian(),
        bajoran(),
        betazoid(),
        denobulan(),
        human(),
        tellarite(),
        trill(),
        vulcan()
    ];
    
}

const randomSpecies = () => {

    const allSpecies = getSpeciesDistribution();

    const numberSpecies = allSpecies.length;

    const selected = getRandomInt(numberSpecies);

    return allSpecies[selected];
}

const otherRandomSpecies = (excludeSpecies) => {

    let found = null;

    do {

        const candidate = randomSpecies();
        if (candidate.name !== excludeSpecies.name) {
            found = candidate;
        }

    } while (found == null);

    return found;
}

module.exports.randomSpecies = randomSpecies;
module.exports.otherRandomSpecies = otherRandomSpecies;
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

module.exports.randomSpecies = randomSpecies;
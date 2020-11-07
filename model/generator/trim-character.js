'use strict';

const { deepClone } = require("../misc");

const trimCharacter = (source) => {

    let clone = deepClone(source);

    delete clone.species;
    delete clone.environment;
    delete clone.upbringing;
    delete clone.academyTrack;
    delete clone.career;

    const talentNames = [];

    clone.talents.forEach(element => {
        talentNames.push(element.name);
    });

    clone.talents = talentNames;

    return clone;
}

module.exports.trimCharacter = trimCharacter;
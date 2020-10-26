'use strict';

const { characterAttributes } = require("../character-attributes");
const { Species } = require("./species");
const { getRandomInt } = require("./../../misc");

const andorian = () => {

    let species = new Species();

    species.name = 'Androian';
    species.attributesToChange = [ {attribute: characterAttributes().daring, changeBy: 1}, {attribute: characterAttributes().control, changeBy: 1}, {attribute: characterAttributes().presence, changeBy: 1} ];
    species.traits = [ 'Andorian' ];
    species.talents = [ 'Proud And Honourable', 'The Ushaan' ];

    species.givenNames = ['John', 'Jane'];
    species.familyNames = ['Smith', 'Jones'];
    species.genders = [ 
        { name: 'zhen', prefix: 'zh' },
        { name: 'shen', prefix: 'sh' },
        { name: 'chan', prefix: 'ch' },
        { name: 'thaan', prefix: 'th' }
    ];

    species.generateGender = () => {

        return species.genders[getRandomInt(species.genders.length)]
    };

    species.generateName = (genderName) => {

        const givenName = species.givenNames[getRandomInt(species.givenNames.length)];
        const familyName = species.familyNames[getRandomInt(species.familyNames.length)];
        const gender = species.genders.find(e => e.name === genderName);

        return `${givenName} ${gender.prefix}\'${familyName}`;
    };

    return species;
}

module.exports.andorian = andorian;
'use strict';

const { characterAttributes } = require("../character-attributes");
const { Species } = require("./species");
const { getRandomInt } = require("./../../misc");
const { Talent } = require("../talents/talent");

const bajoran = () => {

    let species = new Species();

    species.name = 'Bajoran';
    species.attributesToChange = [ {attribute: characterAttributes().daring, changeBy: 1}, {attribute: characterAttributes().control, changeBy: 1}, {attribute: characterAttributes().insight, changeBy: 1} ];
    species.traits = [ 'Bajoran' ];
    species.talents = [ new Talent('Orb Experience', 'Bajoran'), new Talent('Strong Pagh', 'Bajoran') ];

    species.givenNames = ['Eledren', 'Givia', 'Nereis', 'Valerian', 'Wen', 'Hylian', 'Harrian', 'Elsepen', 'Alvia', 'Ensepien'];
    species.familyNames = ['Pirako', 'Enia', 'Gia', 'Alric', 'Venelia', 'Anton', 'Enstenia', 'Xeleya', 'Hafari', 'Isulia'];
    species.genders = [ 
        { name: 'male' },
        { name: 'female' }
    ];

    species.generateGender = () => {

        return species.genders[getRandomInt(species.genders.length)]
    };

    species.generateName = (genderName) => {

        const givenName = species.givenNames[getRandomInt(species.givenNames.length)];
        const familyName = species.familyNames[getRandomInt(species.familyNames.length)];

        return `${familyName} ${givenName}`;
    };

    return species;
}

module.exports.bajoran = bajoran;
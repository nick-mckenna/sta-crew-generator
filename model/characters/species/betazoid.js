'use strict';

const { characterAttributes } = require("../character-attributes");
const { Species } = require("./species");
const { getRandomInt } = require("./../../misc");
const { Talent } = require("../talents/talent");

const betazoid = () => {

    let species = new Species();

    species.name = 'Betazoid';
    species.attributesToChange = [ {attribute: characterAttributes().insight, changeBy: 1}, {attribute: characterAttributes().presence, changeBy: 1}, {attribute: characterAttributes().reason, changeBy: 1} ];
    species.traits = [ 'Betazoid' ];
    species.talents = [ new Talent('Empath', 'Betazoid'), new Talent('Telepath', 'Betazoid') ];
    species.speciesTalentRequired = true;

    species.givenNames = ['Elena', 'Mikus', 'Amulo', 'Enterio', 'Amenus', 'Andreli', 'Epeso', 'Aletia', 'Gorin', 'Elswanix'];
    species.familyNames = ['Ilius', 'Grumila', 'Erosta', 'Velen', 'Atwalsa', 'Encephix', 'Gatril', 'Valius', 'Eserio', 'Miswala'];
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

        return `${givenName} ${familyName}`;
    };

    return species;
}

module.exports.betazoid = betazoid;
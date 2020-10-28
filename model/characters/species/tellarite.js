'use strict';

const { characterAttributes } = require("../character-attributes");
const { Species } = require("./species");
const { getRandomInt } = require("./../../misc");
const { Talent } = require("../talents/talent");

const tellarite = () => {

    let species = new Species();

    species.name = 'tellarite';
    species.attributesToChange = [ {attribute: characterAttributes().control, changeBy: 1}, {attribute: characterAttributes().fitness, changeBy: 1}, {attribute: characterAttributes().insight, changeBy: 1} ];
    species.traits = [ 'Tellarite' ];
    species.talents = [ new Talent('Incisive Scrutiny', 'Tellarite'), new Talent('Sturdy', 'Tellarite') ];

    species.givenNames = ['Graf', 'Krug', 'Argo', 'Retex', 'Vorux', 'Argfa', 'Rekes', 'Rolsch', 'Kronix', 'Galrath'];
    species.familyNames = ['Eriks', 'Varaks', 'Krosia', 'Fargar', 'Ritriox', 'Egresix', 'Argaz', 'Graftar', 'Korus', 'Entregik'];
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

module.exports.tellarite = tellarite;
'use strict';

const { characterAttributes } = require("../character-attributes");
const { Species } = require("./species");
const { getRandomInt } = require("./../../misc");
const { Talent } = require("../talents/talent");

const trill = () => {

    let species = new Species();

    species.name = 'Trill';
    species.attributesToChange = [ {attribute: characterAttributes().control, changeBy: 1}, {attribute: characterAttributes().presence, changeBy: 1}, {attribute: characterAttributes().reason, changeBy: 1} ];
    species.traits = [ 'Trill' ];
    species.talents = [ new Talent('Former Initiate', 'Trill'), new Talent('Joined', 'Trill') ];

    species.givenNames = ['Shalizia', 'Melres', 'Ilsupa', 'Selen', 'Polia', 'Queres', 'Zia', 'Lemian', 'Korsi', 'Kwanli'];
    species.familyNames = ['Borus', 'Hapia', 'Telesia', 'Bron', 'Relis', 'Taran', 'Yentil', 'Firus', 'Dani', 'Longy'];
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

module.exports.trill = trill;
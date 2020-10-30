'use strict';

const { characterAttributes, randomAttribute, randomAttributeExclude } = require("../character-attributes");
const { Species } = require("./species");
const { getRandomInt } = require("./../../misc");
const { Talent } = require("../talents/talent");

const human = () => {

    let species = new Species();

    species.name = 'human';

    species.attributesToChange = [];
    let selectedAttributes = [];
    for (let i = 0; i < 3; i++) {

        let nextRandom = randomAttributeExclude(selectedAttributes);
        selectedAttributes.push(nextRandom);
        species.attributesToChange.push({ attribute: nextRandom, changeBy: 1 });
    }
    
    species.traits = [ 'Human' ];
    species.talents = [ new Talent('Resolute', 'Human'), new Talent('Spirit Of Discovery', 'Human') ];

    species.maleGivenNames = ['Gene', 'John', 'Levar', 'Deepak', 'Dwayne', 'Wei-Bin', 'Kolya', 'Clive', 'Amadip', 'Sherard'];
    species.femaleGivenNames = ['Donna', 'Aki', 'Senal', 'Audre', 'Jun', 'Amelia', 'Anastasia', 'Ebba', 'Isla', 'Gabriella'];
    species.familyNames = ['Franklin', 'Singh', 'Ng', 'Hito', 'Abramov', 'Castillio', 'Roberts', 'McGann', 'Itwal', 'Fennig'];
    species.genders = [ 
        { name: 'male' },
        { name: 'female' }
    ];

    species.generateGender = () => {

        return species.genders[getRandomInt(species.genders.length)]
    };

    species.generateName = (genderName) => {

        const givenNames = genderName === 'male' ? species.maleGivenNames : species.femaleGivenNames;

        const givenName = givenNames[getRandomInt(givenNames.length)];
        const familyName = species.familyNames[getRandomInt(species.familyNames.length)];

        return `${givenName} ${familyName}`;
    };

    return species;
}

module.exports.human = human;
'use strict';

const { characterAttributes } = require("../character-attributes");
const { Species } = require("./species");
const { getRandomInt } = require("./../../misc");
const { Talent } = require("../talents/talent");

const vulcan = () => {

    let species = new Species();

    species.name = 'vulcan';
    species.attributesToChange = [ {attribute: characterAttributes().control, changeBy: 1}, {attribute: characterAttributes().fitness, changeBy: 1}, {attribute: characterAttributes().reason, changeBy: 1} ];
    species.traits = [ 'Vulcan' ];
    species.talents = [ new Talent('Kolinahr', 'Vulcan'), new Talent('Mind-Meld', 'Vulcan'), new Talent('Nerve Pinch', 'Vulcan') ];

    species.maleNames = ['Tarox', 'Vrix', 'Byron', 'Entoc', 'Alyx', 'Venryl', 'Boral', 'Vinal', 'Syntok', 'Jalek'];
    species.femaleNames = ['T\'Rel', 'T\'Malek', 'Esreta', 'T\'Lenia', 'Galria', 'S\'Rella', 'Hiralla', 'T\'Sendria', 'Lexilla', 'T\'Kol'];
    species.genders = [ 
        { name: 'male' },
        { name: 'female' }
    ];

    species.generateGender = () => {

        return species.genders[getRandomInt(species.genders.length)]
    };

    species.generateName = (genderName) => {

        const givenNames = genderName === 'male' ? species.maleNames : species.femaleNames;
        const givenName = givenNames[getRandomInt(givenNames.length)];

        return givenName;
    };

    return species;
}

module.exports.vulcan = vulcan;
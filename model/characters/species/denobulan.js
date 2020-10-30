'use strict';

const { characterAttributes } = require("../character-attributes");
const { Species } = require("./species");
const { getRandomInt } = require("./../../misc");
const { Talent } = require("../talents/talent");

const denobulan = () => {

    let species = new Species();

    species.name = 'Denobulan';
    species.attributesToChange = [ {attribute: characterAttributes().fitness, changeBy: 1}, {attribute: characterAttributes().insight, changeBy: 1}, {attribute: characterAttributes().reason, changeBy: 1} ];
    species.traits = [ 'Denobulan' ];
    species.talents = [ new Talent('Orb Experience', 'Denobulan'), new Talent('Strong Pagh', 'Denobulan') ];

    species.givenNames = ['Etox', 'Meryl', 'Artik', 'Baraks', 'Exilt', 'Garant', 'Aspix', 'Ventrex', 'Jikul', 'Rikus'];
    species.familyNames = ['Felox', 'Hortix', 'Kanix', 'Serkul', 'Vacrik', 'Xikril', 'Yarex', 'Brunk', 'Drex', 'Marlox'];
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

module.exports.denobulan = denobulan;
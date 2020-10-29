'use strict';

const { Environment } = require("./environment");
const { getRandomInt } = require("./../../misc");
const { characterDisciplines } = require("../character-disciplines");

const homeworld = () => {

    let environment = new Environment();

    environment.name = 'Homeworld';
    
    environment.getAttributeToIncrease = (species) => {

        return species.attributesToChange[getRandomInt(species.attributesToChange.length)];
    };

    environment.getDisciplineToIncrease = (species) => {

        const options = [ characterDisciplines().command, characterDisciplines().security, characterDisciplines().science ];
        return options[getRandomInt(options.length)];
    };

    return environment;
}

module.exports.homeworld = homeworld;
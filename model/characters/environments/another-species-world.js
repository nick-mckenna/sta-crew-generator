'use strict';

const { Environment } = require("./environment");
const { getRandomInt } = require("./../../misc");
const { characterDisciplines, randomDiscipline } = require("../character-disciplines");
const { randomValue } = require("../values/value-repository");
const { otherRandomSpecies } = require("../species/species-repository");

const anotherSpeciesWorld = () => {

    let environment = new Environment();

    environment.name = 'Another Species\' World';
    
    
    environment.getAttributeToIncrease = (species) => {

        const randomSpecies = otherRandomSpecies(species);
        return randomSpecies.attributesToChange[getRandomInt(species.attributesToChange.length)].attribute;
    };

    environment.getDisciplineToIncrease = (species) => {

        return randomDiscipline();
    };

    return environment;
}

module.exports.anotherSpeciesWorld = anotherSpeciesWorld;
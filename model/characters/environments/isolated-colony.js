'use strict';

const { Environment } = require("./environment");
const { getRandomInt } = require("./../../misc");
const { characterDisciplines, randomDiscipline } = require("../character-disciplines");
const { characterAttributes } = require("../character-attributes");

const isolatedColony = () => {

    let environment = new Environment();

    environment.name = 'Isolated Colony';
    
    environment.getAttributeToIncrease = (species) => {

        const attributes = [characterAttributes().reason, characterAttributes().insight];
        return attributes[getRandomInt(attributes.length)];
    };

    environment.getDisciplineToIncrease = (species) => {

        const options = [ characterDisciplines().engineering, 
            characterDisciplines().science, characterDisciplines().medicine ];
        return options[getRandomInt(options.length)];
    };

    return environment;
}

module.exports.isolatedColony = isolatedColony;
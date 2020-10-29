'use strict';

const { Environment } = require("./environment");
const { getRandomInt } = require("./../../misc");
const { characterDisciplines, randomDiscipline } = require("../character-disciplines");
const { characterAttributes } = require("../character-attributes");

const frontierColony = () => {

    let environment = new Environment();

    environment.name = 'Frontier Colony';
    
    environment.getAttributeToIncrease = (species) => {

        return [characterAttributes().control, characterAttributes().fitness];
    };

    environment.getDisciplineToIncrease = (species) => {

        const options = [ characterDisciplines().conn, 
            characterDisciplines().security, characterDisciplines().medicine ];
        return options[getRandomInt(options.length)];
    };

    return environment;
}

module.exports.frontierColony = frontierColony;
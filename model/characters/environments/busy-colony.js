'use strict';

const { Environment } = require("./environment");
const { getRandomInt } = require("./../../misc");
const { characterDisciplines, randomDiscipline } = require("../character-disciplines");
const { characterAttributes } = require("../character-attributes");

const busyColony = () => {

    let environment = new Environment();

    environment.name = 'Busy Colony';
    
    environment.getAttributeToIncrease = (species) => {

        return [characterAttributes().daring, characterAttributes().presence];
    };

    environment.getDisciplineToIncrease = (species) => {

        const options = [ characterDisciplines().command, characterDisciplines().security, characterDisciplines().science ];
        return options[getRandomInt(options.length)];
    };

    return environment;
}

module.exports.busyColony = busyColony;
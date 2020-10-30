'use strict';

const { Environment } = require("./environment");
const { getRandomInt } = require("./../../misc");
const { characterDisciplines, randomDiscipline } = require("../character-disciplines");
const { characterAttributes } = require("../character-attributes");

const starshipOrStarbase = () => {

    let environment = new Environment();

    environment.name = 'Starship Or Starbase';
    
    environment.getAttributeToIncrease = (species) => {

        const attributes = [characterAttributes().control, characterAttributes().insight];
        return attributes[getRandomInt(attributes.length)];
    };

    environment.getDisciplineToIncrease = (species) => {

        const options = [ characterDisciplines().conn, 
            characterDisciplines().command, characterDisciplines().engineering ];
        return options[getRandomInt(options.length)];
    };

    return environment;
}

module.exports.starshipOrStarbase = starshipOrStarbase;
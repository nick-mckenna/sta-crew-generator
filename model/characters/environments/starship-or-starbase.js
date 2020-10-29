'use strict';

const { Environment } = require("./environment");
const { getRandomInt } = require("./../../misc");
const { characterDisciplines, randomDiscipline } = require("../character-disciplines");
const { characterAttributes } = require("../character-attributes");

const starshipOrStarbase = () => {

    let environment = new Environment();

    environment.name = 'Starship Or Starbase';
    
    environment.getAttributeToIncrease = (species) => {

        return [characterAttributes().control, characterAttributes().insight];
    };

    environment.getDisciplineToIncrease = (species) => {

        const options = [ characterDisciplines().conn, 
            characterDisciplines().command, characterDisciplines().engineering ];
        return options[getRandomInt(options.length)];
    };

    return environment;
}

module.exports.starshipOrStarbase = starshipOrStarbase;
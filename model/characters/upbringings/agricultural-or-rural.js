'use strict';

const { characterDisciplines } = require("../character-disciplines");
const { Upbringing, randomAcceptanceOption } = require("./upbringing");

const agriculturalOrRural = () => {

    let upbringing = new Upbringing();

    upbringing.name = 'Agricultural Or Rural';
    upbringing.acceptance = randomAcceptanceOption();
    upbringing.focuses = [
        'Animal Handling',
        'Athletics',
        'Emergency Medicine',
        'Endurance',
        'Ground Vehicles',
        'Infectious Diseases',
        'Navigation',
        'Toxicology'
    ];

    upbringing.acceptedAttributesToIncrease = [
        {attribute: characterAttributes().fitness, changeBy: 2},
        {attribute: characterAttributes().control, changeBy: 1}
    ];

    upbringing.rebelledAttributesToIncrease = [
        {attribute: characterAttributes().presence, changeBy: 2},
        {attribute: characterAttributes().reason, changeBy: 1}
    ];

    upbringing.disciplinesToIncrease = [

        characterDisciplines().conn,
        characterDisciplines().security,
        characterDisciplines().medicine
    ];

    return upbringing;
}

module.exports.agriculturalOrRural = agriculturalOrRural;
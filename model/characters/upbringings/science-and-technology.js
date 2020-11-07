'use strict';

const { characterAttributes } = require("../character-attributes");
const { characterDisciplines } = require("../character-disciplines");
const { Upbringing, randomAcceptanceOption } = require("./upbringing");

const scienceAndTechnology = () => {

    let upbringing = new Upbringing();

    upbringing.name = 'Science And Technology';
    upbringing.acceptance = randomAcceptanceOption();
    upbringing.focuses = [
        'Astrophysics',
        'Astronavigation',
        'Computers',
        'Cybernetics',
        'Xenobiology',
        'Chemistry',
        'Physics',
        'Power Systems',
        'Gewnetics',
        'Subspace Communications',
        'Surgery',
        'Quantum Mechanics',
        'Warp Field Dynamics'
    ];

    upbringing.acceptedAttributesToIncrease = [
        {attribute: characterAttributes().control, changeBy: 2},
        {attribute: characterAttributes().reason, changeBy: 1}
    ];

    upbringing.rebelledAttributesToIncrease = [
        {attribute: characterAttributes().insight, changeBy: 2},
        {attribute: characterAttributes().daring, changeBy: 1}
    ];

    upbringing.disciplinesToIncrease = [

        characterDisciplines().conn,
        characterDisciplines().engineering,
        characterDisciplines().science,
        characterDisciplines().medicine
    ];

    return upbringing;
}

module.exports.scienceAndTechnology = scienceAndTechnology;
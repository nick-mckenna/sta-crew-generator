'use strict';

const { characterDisciplines } = require("../character-disciplines");
const { Upbringing, randomAcceptanceOption } = require("./upbringing");

const starfleet = () => {

    let upbringing = new Upbringing();

    upbringing.name = 'Starfleet';
    upbringing.acceptance = randomAcceptanceOption();
    upbringing.focuses = [
        'Astronavigation',
        'Composure',
        'Extra-Vehicular Activity',
        'Hand-To-Hand Combat',
        'Hand Phasers',
        'Small Craft',
        'Starfleet Protocol',
        'Starship Recognition',
        'History'
    ];

    upbringing.acceptedAttributesToIncrease = [
        {attribute: characterAttributes().control, changeBy: 2},
        {attribute: characterAttributes().fitness, changeBy: 1}
    ];

    upbringing.rebelledAttributesToIncrease = [
        {attribute: characterAttributes().daring, changeBy: 2},
        {attribute: characterAttributes().insight, changeBy: 1}
    ];

    upbringing.disciplinesToIncrease = [

        characterDisciplines().command,
        characterDisciplines().conn,
        characterDisciplines().engineering,
        characterDisciplines().medicine,
        characterDisciplines().science,
        characterDisciplines().security
    ];

    return upbringing;
}

module.exports.starfleet = starfleet;
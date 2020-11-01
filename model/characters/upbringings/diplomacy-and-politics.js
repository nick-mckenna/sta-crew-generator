'use strict';

const { characterDisciplines } = require("../character-disciplines");
const { Upbringing, randomAcceptanceOption } = require("./upbringing");

const diplomacyAndPolitics = () => {

    let upbringing = new Upbringing();

    upbringing.name = 'Diplomacy And Politics';
    upbringing.acceptance = randomAcceptanceOption();
    upbringing.focuses = [
        'Composure',
        'Debate',
        'Diplomacy',
        'Espionage',
        'Interrogation',
        'Law',
        'Philosophy',
        'Starfleet Protocol'
    ];

    upbringing.acceptedAttributesToIncrease = [
        {attribute: characterAttributes().presence, changeBy: 2},
        {attribute: characterAttributes().control, changeBy: 1}
    ];

    upbringing.rebelledAttributesToIncrease = [
        {attribute: characterAttributes().reason, changeBy: 2},
        {attribute: characterAttributes().fitness, changeBy: 1}
    ];

    upbringing.disciplinesToIncrease = [

        characterDisciplines().command,
        characterDisciplines().conn,
        characterDisciplines().security
    ];

    return upbringing;
}

module.exports.diplomacyAndPolitics = diplomacyAndPolitics;
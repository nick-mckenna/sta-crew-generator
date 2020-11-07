'use strict';

const { characterAttributes } = require("../character-attributes");
const { characterDisciplines } = require("../character-disciplines");
const { Upbringing, randomAcceptanceOption } = require("./upbringing");

const artisticAndCreative = () => {

    let upbringing = new Upbringing();

    upbringing.name = 'Artistic And Creative';
    upbringing.acceptance = randomAcceptanceOption();
    upbringing.focuses = [
        'Botany',
        'Cultural Studies',
        'Holoprogramming',
        'Linguistics',
        'Music',
        'Observation',
        'Persuasion',
        'Psychology'
    ];

    upbringing.acceptedAttributesToIncrease = [
        {attribute: characterAttributes().presence, changeBy: 2},
        {attribute: characterAttributes().insight, changeBy: 1}
    ];

    upbringing.rebelledAttributesToIncrease = [
        {attribute: characterAttributes().fitness, changeBy: 2},
        {attribute: characterAttributes().daring, changeBy: 1}
    ];

    upbringing.disciplinesToIncrease = [

        characterDisciplines().command,
        characterDisciplines().engineering,
        characterDisciplines().science
    ];

    return upbringing;
}

module.exports.artisticAndCreative = artisticAndCreative;
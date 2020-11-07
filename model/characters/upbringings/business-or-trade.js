'use strict';

const { characterAttributes } = require("../character-attributes");
const { characterDisciplines } = require("../character-disciplines");
const { Upbringing, randomAcceptanceOption } = require("./upbringing");

const businessOrTrade = () => {

    let upbringing = new Upbringing();

    upbringing.name = 'Business Or Trade';
    upbringing.acceptance = randomAcceptanceOption();
    upbringing.focuses = [
        'Finances',
        'Geology',
        'Linguistics',
        'Manufacturing',
        'Metallurgy',
        'Negotiation',
        'Survey'
    ];

    upbringing.acceptedAttributesToIncrease = [
        {attribute: characterAttributes().presence, changeBy: 2},
        {attribute: characterAttributes().daring, changeBy: 1}
    ];

    upbringing.rebelledAttributesToIncrease = [
        {attribute: characterAttributes().insight, changeBy: 2},
        {attribute: characterAttributes().reason, changeBy: 1}
    ];

    upbringing.disciplinesToIncrease = [

        characterDisciplines().command,
        characterDisciplines().engineering,
        characterDisciplines().science
    ];

    return upbringing;
}

module.exports.businessOrTrade = businessOrTrade;
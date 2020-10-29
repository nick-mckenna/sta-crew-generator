'use strict';

const { getRandomInt } = require("../misc");

const characterAttributes = () => {

    return {

        control: 'Control',
        daring: 'Daring',
        fitness: 'Fitness',
        insight: 'Insight',
        presence: 'Presence',
        reason: 'Reason'
    };
}

const randomAttribute = () => {

    const selected = getRandomInt(6);
    let attribute = characterAttributes().control;
    switch (selected) {

        case 1:
            attribute = characterAttributes().daring;
        break;

        case 2:
            attribute = characterAttributes().fitness;
        break;

        case 3:
            attribute = characterAttributes().insight;
        break;

        case 4:
            attribute = characterAttributes().presence;
        break;

        case 5:
            attribute = characterAttributes().reason;
        break;
    }

    return attribute;
}

module.exports.characterAttributes = characterAttributes;
module.exports.randomAttribute = randomAttribute;
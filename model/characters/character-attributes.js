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

const randomAttributeExclude = (excludeThese) => {

    let found = null;

    do {

        let candidate = randomAttribute();
        if (excludeThese.includes(candidate) === false) {
            found = candidate;
        }

    } while (found == null);

    return found;
}


const getAttributeValue = (character, attributeName) => {

    let value = 0;

    if (attributeName === characterAttributes().control) {
        value = character.control;
    }
    if (attributeName === characterAttributes().daring) {
        value = character.daring;
    }
    if (attributeName === characterAttributes().fitness) {
        value = character.fitness;
    }
    if (attributeName === characterAttributes().insight) {
        value = character.insight;
    }
    if (attributeName === characterAttributes().presence) {
        value = character.presence;
    }
    if (attributeName === characterAttributes().reason) {
        value = character.reason;
    }

    return value;
}

const incremementAttributeValue = (character, attributeName) => {

    if (attributeName === characterAttributes().control) {
        character.control++;
    }
    if (attributeName === characterAttributes().daring) {
        character.daring++;
    }
    if (attributeName === characterAttributes().fitness) {
        character.fitness++;
    }
    if (attributeName === characterAttributes().insight) {
        character.insight++;
    }
    if (attributeName === characterAttributes().presence) {
        character.presence++;
    }
    if (attributeName === characterAttributes().reason) {
        character.reason++;
    }
}

const decremementAttributeValue = (character, attributeName) => {

    if (attributeName === characterAttributes().control) {
        character.control--;
    }
    if (attributeName === characterAttributes().daring) {
        character.daring--;
    }
    if (attributeName === characterAttributes().fitness) {
        character.fitness--;
    }
    if (attributeName === characterAttributes().insight) {
        character.insight--;
    }
    if (attributeName === characterAttributes().presence) {
        character.presence--;
    }
    if (attributeName === characterAttributes().reason) {
        character.reason--;
    }
}

module.exports.characterAttributes = characterAttributes;
module.exports.randomAttribute = randomAttribute;
module.exports.randomAttributeExclude = randomAttributeExclude;
module.exports.getAttributeValue = getAttributeValue;
module.exports.incremementAttributeValue = incremementAttributeValue;
module.exports.decremementAttributeValue = decremementAttributeValue;
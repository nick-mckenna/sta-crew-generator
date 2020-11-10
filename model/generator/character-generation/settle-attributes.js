'use strict';

const { characterAttributes, randomAttributeExclude, getAttributeValue, incremementAttributeValue, decremementAttributeValue } = require("../../characters/character-attributes");
const { deepClone } = require("../../misc");

const findAttributesAtMax = (character, max) => {

    let attributesAtMax = [];

    if (character.control === max) {
        attributesAtMax.push(characterAttributes().control);
    }
    if (character.daring === max) {
        attributesAtMax.push(characterAttributes().daring);
    }
    if (character.fitness === max) {
        attributesAtMax.push(characterAttributes().fitness);
    }
    if (character.insight === max) {
        attributesAtMax.push(characterAttributes().insight);
    }
    if (character.presence === max) {
        attributesAtMax.push(characterAttributes().presence);
    }
    if (character.reason === max) {
        attributesAtMax.push(characterAttributes().reason);
    }

    return attributesAtMax;
}

const reduceAllToMax = (character, max) => {

    let pointsToAllocate = 0;

    if (character.control > max) {
        const diff = max - character.control;
        character.control = max;
        pointsToAllocate += diff;
    }
    if (character.daring > max) {
        const diff = max - character.daring;
        character.daring = max;
        pointsToAllocate += diff;
    }
    if (character.fitness > max) {
        const diff = max - character.fitness;
        character.fitness = max;
        pointsToAllocate += diff;
    }
    if (character.insight > max) {
        const diff = max - character.insight;
        character.insight = max;
        pointsToAllocate += diff;
    }
    if (character.presence > max) {
        const diff = max - character.presence;
        character.presence = max;
        pointsToAllocate += diff;
    }
    if (character.reason > max) {
        const diff = max - character.reason;
        character.reason = max;
        pointsToAllocate += diff;
    }

    return pointsToAllocate;
}

const reduceAllButOneBelowMax = (character, attributesAtMax) => {

    const numberToReduce = attributesAtMax.length - 1;
    let pointsToAllocate = 0;

    for (let i = 0; i < numberToReduce; i++) {
        const attributeName = attributesAtMax[i];
        decremementAttributeValue(character, attributeName);
        pointsToAllocate++;
    }

    return pointsToAllocate;
}

const reallocatePoints = (character, absoluteMax, max, pointsToAllocate) => {

    // Reallocate points removed
    for (let j = 0; j < pointsToAllocate; j++) {

        // Find the current maximum attribute value (only one permitted at absolute maximum)
        let thisMax = findAttributesAtMax(character, absoluteMax).length === 0 ? absoluteMax : max;

        let excludes = [];
        let found = null;
        let aborted = false;
        do {

            const nextAttr = randomAttributeExclude(excludes);
            if (getAttributeValue(character, nextAttr) + 1 <= thisMax) {
                found = nextAttr;
                incremementAttributeValue(character, found);
            }
            excludes.push(nextAttr);
            aborted = excludes.length === 6;

        } while (found === null && aborted === false);
    }
}

const settleAttributesStandard = (sourceCharacter) => {

    let character = deepClone(sourceCharacter);

    const max = 12;

    let pointsToAllocate = reduceAllToMax(character, max);

    let attributesAtMax = findAttributesAtMax(character, max);

    if (attributesAtMax.length > 1) {
        pointsToAllocate += reduceAllButOneBelowMax(character, attributesAtMax);
    }

    if (pointsToAllocate > 0) {
        reallocatePoints(character, max, max - 1, pointsToAllocate);
    }

    return character;
}

const settleAttributesUntappedPotential = (sourceCharacter) => {

    let character = deepClone(sourceCharacter);

    const max = 11;

    let pointsToAllocate = reduceAllToMax(character, max);

    if (pointsToAllocate > 0) {
        reallocatePoints(character, max, max - 1, pointsToAllocate);
    }

    return character;
}

const settleAttributes = (character) => {

    if (character.talents.find(element => element.name === 'Untapped Potential') == null) {
        return settleAttributesStandard(character);
    } else {
        return settleAttributesUntappedPotential(character);
    }
}

module.exports.settleAttributes = settleAttributes;
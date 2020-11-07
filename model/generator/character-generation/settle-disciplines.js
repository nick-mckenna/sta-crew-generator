'use strict';

const { characterDisciplines, randomDisciplineExcluding, getDisciplineValue, incremementDisciplineValue, decremementDisciplineValue } = require("../../characters/character-disciplines");
const { deepClone } = require("../../misc");

const findDisciplinesAtMax = (character, max) => {

    let disciplinesAtMax = [];

    if (character.control === max) {
        disciplinesAtMax.push(characterDisciplines().control);
    }
    if (character.daring === max) {
        disciplinesAtMax.push(characterDisciplines().daring);
    }
    if (character.fitness === max) {
        disciplinesAtMax.push(characterDisciplines().fitness);
    }
    if (character.insight === max) {
        disciplinesAtMax.push(characterDisciplines().insight);
    }
    if (character.presence === max) {
        disciplinesAtMax.push(characterDisciplines().presence);
    }
    if (character.reason === max) {
        disciplinesAtMax.push(characterDisciplines().reason);
    }

    return disciplinesAtMax;
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

const reduceAllButOneBelowMax = (character, disciplinesAtMax) => {

    const numberToReduce = disciplinesAtMax.length - 1;
    let pointsToAllocate = 0;

    for (let i = 0; i < numberToReduce; i++) {
        const disciplineName = disciplinesAtMax[i];
        decremementDisciplineValue(character, disciplineName);
        pointsToAllocate++;
    }

    return pointsToAllocate;
}

const reallocatePoints = (character, absoluteMax, max, pointsToAllocate) => {

    // Reallocate points removed
    for (let j = 0; j < pointsToAllocate; j++) {

        // Find the current maximum discipline value (only one permitted at absolute maximum)
        let thisMax = findDisciplinesAtMax(character, absoluteMax).length === 0 ? absoluteMax : max;

        let excludes = [];
        let found = null;
        let aborted = false;
        do {

            const nextAttr = randomDisciplineExcluding(excludes);
            if (getDisciplineValue(character, nextAttr) + 1 <= thisMax) {
                found = nextAttr;
                incremementDisciplineValue(character, found);
            }
            excludes.push(nextAttr);
            aborted = excludes.length === 6;

        } while (found === null && aborted === false);
    }
}

const settleDisciplinesStandard = (sourceCharacter) => {

    let character = deepClone(sourceCharacter);

    const max = 5;

    let pointsToAllocate = reduceAllToMax(character, max);

    let disciplinesAtMax = findDisciplinesAtMax(character, max);

    if (disciplinesAtMax.length > 1) {
        pointsToAllocate += reduceAllButOneBelowMax(character, disciplinesAtMax);
    }

    if (pointsToAllocate > 0) {
        reallocatePoints(character, max, max - 1, pointsToAllocate);
    }

    return character;
}

const settleDisciplinesUntappedPotential = (sourceCharacter) => {

    let character = deepClone(sourceCharacter);

    const max = 4;

    let pointsToAllocate = reduceAllToMax(character, max);

    if (pointsToAllocate > 0) {
        reallocatePoints(character, max, max - 1, pointsToAllocate);
    }

    return character;
}

const settleDisciplines = (character) => {

    if (character.talents.find('Untapped Potential') == null) {
        return settleDisciplinesStandard(character);
    } else {
        return settleDisciplinesUntappedPotential(character);
    }
}

module.exports.settleDisciplines = settleDisciplines;
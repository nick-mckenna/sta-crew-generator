'use strict';

const { characterDisciplines, randomDisciplineExcluding, getDisciplineValue, incremementDisciplineValue, decremementDisciplineValue } = require("../../characters/character-disciplines");
const { deepClone } = require("../../misc");

const findDisciplinesAtMax = (character, max) => {

    let disciplinesAtMax = [];

    if (character.control === max) {
        disciplinesAtMax.push(characterDisciplines().command);
    }
    if (character.daring === max) {
        disciplinesAtMax.push(characterDisciplines().conn);
    }
    if (character.fitness === max) {
        disciplinesAtMax.push(characterDisciplines().security);
    }
    if (character.insight === max) {
        disciplinesAtMax.push(characterDisciplines().engineering);
    }
    if (character.presence === max) {
        disciplinesAtMax.push(characterDisciplines().science);
    }
    if (character.reason === max) {
        disciplinesAtMax.push(characterDisciplines().medicine);
    }

    return disciplinesAtMax;
}

const reduceAllToMax = (character, max) => {

    let pointsToAllocate = 0;

    if (character.command > max) {
        const diff = character.command - max;
        character.command = max;
        pointsToAllocate += diff;
    }
    if (character.conn > max) {
        const diff = character.conn - max;
        character.conn = max;
        pointsToAllocate += diff;
    }
    if (character.security > max) {
        const diff = character.security - max;
        character.security = max;
        pointsToAllocate += diff;
    }
    if (character.engineering > max) {
        const diff = character.engineering - max;
        character.engineering = max;
        pointsToAllocate += diff;
    }
    if (character.science > max) {
        const diff = character.science - max;
        character.science = max;
        pointsToAllocate += diff;
    }
    if (character.medicine > max) {
        const diff = character.medicine - max;
        character.medicine = max;
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

    if (character.talents.find(element => element.name === 'Untapped Potential') == null) {
        return settleDisciplinesStandard(character);
    } else {
        return settleDisciplinesUntappedPotential(character);
    }
}

module.exports.settleDisciplines = settleDisciplines;
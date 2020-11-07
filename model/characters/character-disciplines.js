'use strict';

const { getRandomInt } = require("../misc");

const characterDisciplines = () => {

    return {

        command: 'Command',
        conn: 'Conn',
        security: 'Security',
        engineering: 'Engineering',
        science: 'Science',
        medicine: 'Medicine'
    };
}

const randomDiscipline = () => {

    const selected = getRandomInt(6);
    let discipline = characterDisciplines().command;
    switch (selected) {

        case 1:
            discipline = characterDisciplines().conn;
        break;

        case 2:
            discipline = characterDisciplines().security;
        break;

        case 3:
            discipline = characterDisciplines().engineering;
        break;

        case 4:
            discipline = characterDisciplines().science;
        break;

        case 5:
            discipline = characterDisciplines().medicine;
        break;
    }

    return discipline;
}

const randomDisciplineExcluding = (excludes) => {

    let discipline = null;

    do {

        const candidate = randomDiscipline();
        if (excludes.includes(candidate) == false) {
            discipline = candidate;
        }

    } while (discipline == null);

    return discipline;
}


const getDisciplineValue = (character, disciplineName) => {

    let value = 0;

    if (disciplineName === characterDisciplines().command) {
        value = character.command;
    }
    if (disciplineName === characterDisciplines().conn) {
        value = character.conn;
    }
    if (disciplineName === characterDisciplines().security) {
        value = character.security;
    }
    if (disciplineName === characterDisciplines().engineering) {
        value = character.engineering;
    }
    if (disciplineName === characterDisciplines().science) {
        value = character.science;
    }
    if (disciplineName === characterDisciplines().medicine) {
        value = character.medicine;
    }

    return value;
}

const incremementDisciplineValue = (character, disciplineName) => {

    if (disciplineName === characterDisciplines().command) {
        character.command++;
    }
    if (disciplineName === characterDisciplines().conn) {
        character.conn++;
    }
    if (disciplineName === characterDisciplines().security) {
        character.security++;
    }
    if (disciplineName === characterDisciplines().engineering) {
        character.engineering++;
    }
    if (disciplineName === characterDisciplines().science) {
        character.science++;
    }
    if (disciplineName === characterDisciplines().medicine) {
        character.medicine++;
    }
}

const decremementDisciplineValue = (character, disciplineName) => {

    if (disciplineName === characterDisciplines().command) {
        character.command--;
    }
    if (disciplineName === characterDisciplines().conn) {
        character.conn--;
    }
    if (disciplineName === characterDisciplines().security) {
        character.security--;
    }
    if (disciplineName === characterDisciplines().engineering) {
        character.engineering--;
    }
    if (disciplineName === characterDisciplines().science) {
        character.science--;
    }
    if (disciplineName === characterDisciplines().medicine) {
        character.medicine--;
    }
}


module.exports.characterDisciplines = characterDisciplines;
module.exports.randomDiscipline = randomDiscipline;
module.exports.randomDisciplineExcluding = randomDisciplineExcluding;
module.exports.getAttributeValue = getAttributeValue;
module.exports.incremementDisciplineValue = incremementDisciplineValue;
module.exports.decremementDisciplineValue = decremementDisciplineValue;
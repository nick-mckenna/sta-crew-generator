'use strict';

const { characterDisciplines } = require("../../characters/character-disciplines");
const { deepClone } = require("../../misc");

const modifyDiscipline = (sourceCharacter, attributeName) => {

    let character = deepClone(sourceCharacter);

    switch (attributeName) {

        case characterDisciplines().command:
            character.command += 1;
            break;

        case characterDisciplines().conn:
            character.conn += 1;
            break;

        case characterDisciplines().security:
            character.security += 1;
            break;

        case characterDisciplines().engineering:
            character.engineering += 1;
            break;

        case characterDisciplines().science:
            character.science += 1;
            break;

        case characterDisciplines().medicine:
            character.medicine += 1;
            break;
    }
    
    return character;
}

module.exports.modifyDiscipline = modifyDiscipline;
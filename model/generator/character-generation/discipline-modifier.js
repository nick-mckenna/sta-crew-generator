'use strict';

const { characterDisciplines, randomDiscipline } = require("../../characters/character-disciplines");
const { deepClone } = require("../../misc");

const modifyDiscipline = (sourceCharacter, discipleName, increment = 1, max = 999) => {

    let character = deepClone(sourceCharacter);

    switch (discipleName) {

        case characterDisciplines().command:
            character.command += increment;
            if (character.command > max) {
                character = null;
            }
            break;

        case characterDisciplines().conn:
            character.conn += increment;
            if (character.conn > max) {
                character = null;
            }
            break;

        case characterDisciplines().security:
            character.security += increment;
            if (character.security > max) {
                character = null;
            }
            break;

        case characterDisciplines().engineering:
            character.engineering += increment;
            if (character.engineering > max) {
                character = null;
            }
            break;

        case characterDisciplines().science:
            character.science += increment;
            if (character.science > max) {
                character = null;
            }
            break;

        case characterDisciplines().medicine:
            character.medicine += increment;
            if (character.medicine > max) {
                character = null;
            }
            break;
    }
    
    return character;
}

module.exports.modifyDiscipline = modifyDiscipline;
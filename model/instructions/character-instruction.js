'use strict';

class CharacterInstruction {

    rank = "";
    rankType = "";
    favouredDisciplines = [];
    mainCharacter = false;
}

const validateCharacterInstruction = (characterInstruction) => {

    if (characterInstruction === undefined) {
        throw 'characterInstruction is undefined';
    } else if (characterInstruction === null) {
        throw 'characterInstruction is null';
    } else if (characterInstruction.rank === undefined) {
        throw 'characterInstruction.rank is undefined';
    } else if (characterInstruction.rank === null) {
        throw 'characterInstruction.rank is null';
    } else if (characterInstruction.favouredDisciplines === undefined) {
        throw 'characterInstruction.favouredDisciplines is undefined';
    } else if (characterInstruction.favouredDisciplines === null) {
        throw 'characterInstruction.favouredDisciplines is null';
    } else if (characterInstruction.mainCharacter === undefined) {
        throw 'characterInstruction.mainCharacter is undefined';
    } else if (characterInstruction.mainCharacter === null) {
        throw 'characterInstruction.mainCharacter is null';
    }
}

module.exports.validateCharacterInstruction = validateCharacterInstruction;
module.exports.CharacterInstruction = CharacterInstruction;

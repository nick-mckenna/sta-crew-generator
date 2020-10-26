'use strict';

const { Character } = require("../../characters/character");
const { validateCharacterInstruction } = require("../../instructions/character-instruction");

const generateCharacter = (characterInstruction) => {

    validateCharacterInstruction(characterInstruction);

    return new Character();
    
}

module.exports.generateCharacter = generateCharacter;
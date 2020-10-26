'use strict';

const { Character } = require("../../characters/character");
const { validateCharacterInstruction } = require("../../instructions/character-instruction");
const { generateSpecies } = require("./generate-species");
const { characterAttributes } = require("./../../characters/character-attributes")

const generateCharacter = (characterInstruction) => {

    validateCharacterInstruction(characterInstruction);

    let character = new Character();

    const species = generateSpecies();
    character.species = species.name;
    const gender = species.generateGender();
    character.gender = gender.name;
    character.name = species.generateName(gender.name);

    // TODO: Pick One talent from a combination of the standard list + the species list

    species.attributesToChange.forEach(attr => {

        switch (attr.attribute) {

            case characterAttributes().control:
                character.control += attr.changeBy;
                break;

            case characterAttributes().fitness:
                character.fitness += attr.changeBy;
                break;

            case characterAttributes().presence:
                character.presence += attr.changeBy;
                break;

            case characterAttributes().daring:
                character.daring += attr.changeBy;
                break;

            case characterAttributes().insight:
                character.insight += attr.changeBy;
                break;

            case characterAttributes().reason:
                character.reason += attr.changeBy;
                break;

        }

    });

    return character;
}

module.exports.generateCharacter = generateCharacter;
'use strict';

const { characterAttributes } = require("../../characters/character-attributes");
const { deepClone } = require("../../misc");

const modifyAttributes = (sourceCharacter, modifiers) => {

    let character = deepClone(sourceCharacter);

    modifiers.forEach(attr => {

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

const modifyAttribute = (sourceCharacter, attributeName, increment = 1) => {

    let character = deepClone(sourceCharacter);

    switch (attributeName) {

        case characterAttributes().control:
            character.control += increment;
            break;

        case characterAttributes().fitness:
            character.fitness += increment;
            break;

        case characterAttributes().presence:
            character.presence += increment;
            break;

        case characterAttributes().daring:
            character.daring += increment;
            break;

        case characterAttributes().insight:
            character.insight += increment;
            break;

        case characterAttributes().reason:
            character.reason += increment;
            break;
    }
    
    return character;
}

module.exports.modifyAttributes = modifyAttributes;
module.exports.modifyAttribute = modifyAttribute;
'use strict';

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

module.exports.modifierAttributes = modifyAttributes;
'use strict';

const { randomAttributeExclude, incremementAttributeValue } = require("../../characters/character-attributes");
const { randomValue } = require("../../characters/values/value-repository");

const generateFinalTouches = (sourceCharacter) => {

    let character = deepClone(sourceCharacter);

    // 1. Add a random value
    character.values = randomValue(character.values);

    // 2. Ensure attributes within limits
    character = settleAttributes(character);

    // 3. Incremement two attributes by 1
    for (let i = 0; i < 2; i++) {
        let excludes = [];
        const nextAttr = randomAttributeExclude(excludes);
        incremementAttributeValue(character, nextAttr);
        excludes.push(nextAttr);
    }

    // 4. Ensure attributes within limits
    character = settleAttributes(character);

    // 5. Ensure disciplines within limits
        // TODO: Make sure that the character has high enough disciplines for their Talents

    // 6. Incremement two disciplines by 1

    // 7. Ensure disciplines within limits

    // 8. Set stress
    character.stress = character.fitness + character.security;

    return character;
}

module.exports.generateFinalTouches = generateFinalTouches;
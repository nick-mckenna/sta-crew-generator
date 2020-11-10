'use strict';

const { randomAttributeExclude, incremementAttributeValue } = require("../../characters/character-attributes");
const { randomDisciplineExcluding, incremementDisciplineValue } = require("../../characters/character-disciplines");
const { randomValue } = require("../../characters/values/value-repository");
const { deepClone } = require("../../misc");
const { settleDisciplines } = require("./settle-disciplines");
const { settleAttributes } = require("./settle-attributes");

const generateFinalTouches = (sourceCharacter) => {

    let character = deepClone(sourceCharacter);

    // 1. Add a random value
    character.values = randomValue(character.values);

    // 2. Ensure attributes within limits
    character = settleAttributes(character);

    // 3. Incremement two attributes by 1
    let excludes = [];
    for (let i = 0; i < 2; i++) {
        const nextAttr = randomAttributeExclude(excludes);
        incremementAttributeValue(character, nextAttr);
        excludes.push(nextAttr);
    }

    // 4. Ensure attributes within limits
    character = settleAttributes(character);

    // 5. Ensure disciplines within limits
    character = settleDisciplines(character);

    // 6. Incremement two disciplines by 1
    excludes = [];
    for (let i = 0; i < 2; i++) {
        const nextDisc = randomDisciplineExcluding(excludes);
        incremementDisciplineValue(character, nextDisc);
        excludes.push(nextDisc);
    }

    // 7. Ensure disciplines within limits
    character = settleDisciplines(character);
    
    // 8. Set stress
    character.stress = character.fitness + character.security;

    return character;
}

module.exports.generateFinalTouches = generateFinalTouches;
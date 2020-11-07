'use strict';

const testCharacter = (character) => {

    const expectedAttributeSum = 56;
    const expectedDisciplineSum = 16;
    const expectedNumberValues = 4;
    const expectedNumberTalents = 4;
    const expectedNumberFocuses = 6;

    const actualAttributeSum = character.control + character.fitness + character.presence + character.daring + character.insight + character.reason;
    const actualDisciplineSum = character.command + character.security + character.science + character.conn + character.engineering + character.medicine;
    const actualNumberValues = character.values.length;
    const actualNumberTalents = character.talents.length;
    const actualNumberFocuses = character.focuses.length;

    let valid = true;

    if (expectedAttributeSum !== actualAttributeSum) {
        console.error('Attribute Sum For ' + character.name + ' incorrect. Expected ' + expectedAttributeSum + ' but got ' + actualAttributeSum);
        valid = false;
    }
    if (expectedDisciplineSum !== actualDisciplineSum) {
        console.error('Discipline Sum For ' + character.name + ' incorrect. Expected ' + expectedDisciplineSum + ' but got ' + actualDisciplineSum);
        valid = false;
    }
    if (expectedNumberValues !== actualNumberValues) {
        console.error('Value Count For ' + character.name + ' incorrect. Expected ' + expectedNumberValues + ' but got ' + actualNumberValues);
        valid = false;
    }
    if (expectedNumberTalents !== actualNumberTalents) {
        console.error('Talent Count For ' + character.name + ' incorrect. Expected ' + expectedNumberTalents + ' but got ' + actualNumberTalents);
        valid = false;
    }
    if (expectedNumberFocuses !== actualNumberFocuses) {
        console.error('Focus Count For ' + character.name + ' incorrect. Expected ' + expectedNumberFocuses + ' but got ' + actualNumberFocuses);
        valid = false;
    }

    return valid ? character : null;
}

module.exports.testCharacter = testCharacter;
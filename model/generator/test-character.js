'use strict';

const testCharacter = (character, spec, name) => {

    const expectedAttributeSum = spec.expectedAttributeSum;
    const expectedDisciplineSum = spec.expectedDisciplineSum;
    const expectedNumberValues = spec.expectedNumberValues;
    const expectedNumberTalents = spec.expectedNumberTalents;
    const expectedNumberFocuses = spec.expectedNumberFocuses;

    const actualAttributeSum = character.control + character.fitness + character.presence + character.daring + character.insight + character.reason;
    const actualDisciplineSum = character.command + character.security + character.science + character.conn + character.engineering + character.medicine;
    const actualNumberValues = character.values.length;
    const actualNumberTalents = character.talents.length;
    const actualNumberFocuses = character.focuses.length;

    let valid = true;

    if (expectedAttributeSum !== actualAttributeSum) {
        console.error(name + ' Attribute Sum For ' + character.name + ' incorrect. Expected ' + expectedAttributeSum + ' but got ' + actualAttributeSum);
        valid = false;
    }
    if (expectedDisciplineSum !== actualDisciplineSum) {
        console.error(name + ' Discipline Sum For ' + character.name + ' incorrect. Expected ' + expectedDisciplineSum + ' but got ' + actualDisciplineSum);
        valid = false;
    }
    if (expectedNumberValues !== actualNumberValues) {
        console.error(name + ' Value Count For ' + character.name + ' incorrect. Expected ' + expectedNumberValues + ' but got ' + actualNumberValues);
        valid = false;
    }
    if (expectedNumberTalents !== actualNumberTalents) {
        console.error(name + ' Talent Count For ' + character.name + ' incorrect. Expected ' + expectedNumberTalents + ' but got ' + actualNumberTalents);
        valid = false;
    }
    if (expectedNumberFocuses !== actualNumberFocuses) {
        console.error(name + ' Focus Count For ' + character.name + ' incorrect. Expected ' + expectedNumberFocuses + ' but got ' + actualNumberFocuses);
        valid = false;
    }

    return valid ? character : null;
}

module.exports.testCharacter = testCharacter;
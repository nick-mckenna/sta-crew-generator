'use strict;'

const getAttributeTotal = (character) => {
    return character.control + character.fitness + character.presence + character.daring + character.insight + character.reason;
}

module.exports.getAttributeTotal = getAttributeTotal;
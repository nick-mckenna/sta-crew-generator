'use strict;'

const getDisciplineTotal = (character) => {
    return character.command + character.security + character.science + character.conn + character.engineering + character.medicine;
}

module.exports.getDisciplineTotal = getDisciplineTotal;
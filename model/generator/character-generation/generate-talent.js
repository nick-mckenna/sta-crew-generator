'use strict';

const { characterDisciplines, randomDiscipline } = require("../../characters/character-disciplines");
const { randomTalent } = require("../../characters/talents/talents-repository");

const notCurrentTalent = (character, proposedTalent) => {

    let found = false;
    let count = 0;

    while (count < character.talents.length && found === false) {

        found = character.talents[count].name === proposedTalent.name;
        count++;
    }

    return found === false;
}

const generateTalent = (character, speciesTalents) => {

    let found = null;

    do {
        const candidate = randomTalent(speciesTalents);
        let proposed = null;

        if (candidate.requirements === null) {
            
            proposed = candidate;
            
        } else if (candidate.requirements === character.speciesName) {
            proposed = candidate;
        } else {

            switch (candidate.requirements) {

                case characterDisciplines().command:
                    if (character.command >= candidate.minRequirement) {
                        proposed = candidate;
                    }
                    break;

                case characterDisciplines().conn:
                    if (character.conn >= candidate.minRequirement) {
                        proposed = candidate;
                    }
                    break;

                case characterDisciplines().security:
                    if (character.security >= candidate.minRequirement) {
                        proposed = candidate;
                    }
                    break;

                case characterDisciplines().engineering:
                    if (character.engineering >= candidate.minRequirement) {
                        proposed = candidate;
                    }
                    break;

                case characterDisciplines().science:
                    if (character.science >= candidate.minRequirement) {
                        proposed = candidate;
                    }
                    break;

                case characterDisciplines().medicine:
                    if (character.medicine >= candidate.minRequirement) {
                        proposed = candidate;
                    }
                    break;
            }
        }

        if (proposed != null && notCurrentTalent(character, proposed)) {
            found = proposed;
        }

    } while (found === null);

    return found;
}

module.exports.generateTalent = generateTalent;
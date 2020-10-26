'use strict';

const { characterDisciplines } = require("../../characters/character-disciplines");
const { randomTalent } = require("../../characters/talents/talents-repository");

const generateTalent = (character) => {

    let found = null;

    do {
        const candidate = randomTalent(character.species.talents);

        if (candidate.requirements === null) {
            found = candidate;
        } else if (candidate.requirements === character.species.name) {
            found = candidate;
        } else {

            switch (candidate.requirements) {

                case characterDisciplines().command:
                    if (character.command >= candidate.minRequirement) {
                        found = candidate;
                    }
                    break;

                case characterDisciplines().conn:
                    if (character.conn >= candidate.minRequirement) {
                        found = candidate;
                    }
                    break;

                case characterDisciplines().security:
                    if (character.security >= candidate.minRequirement) {
                        found = candidate;
                    }
                    break;

                case characterDisciplines().engineering:
                    if (character.engineering >= candidate.minRequirement) {
                        found = candidate;
                    }
                    break;

                case characterDisciplines().science:
                    if (character.science >= candidate.minRequirement) {
                        found = candidate;
                    }
                    break;

                case characterDisciplines().medicine:
                    if (character.medicine >= candidate.minRequirement) {
                        found = candidate;
                    }
                    break;
            }

        }

    } while (found === null);

    return found;
}

module.exports.generateTalent = generateTalent;
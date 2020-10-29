'use strict';

const { getRandomInt } = require("../../misc");

class Species {

    name = "unnamed";
    attributesToChange = [];
    traits = [];
    talents = [];

    speciesTalentRequired = false;

    generateName;
    generateGender;

    generateSpeciesTalent = () => {

        const numberTalents = this.talents.length;

        const selected = getRandomInt(numberTalents);

        return this.talents[selected];
    };
}

module.exports.Species = Species;
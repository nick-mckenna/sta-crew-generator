'use strict';

const { getRandomInt } = require("../../misc");
const { agriculturalOrRural } = require("./agricultural-or-rural");
const { artisticAndCreative } = require("./artistic-and-creative");
const { businessOrTrade } = require("./business-or-trade");
const { diplomacyAndPolitics } = require("./diplomacy-and-politics");
const { scienceAndTechnology } = require("./science-and-technology");
const { starfleet } = require("./starfleet");

const randomUpbringing = () => {

    const options = [
        starfleet(),
        businessOrTrade(),
        agriculturalOrRural(),
        artisticAndCreative(),
        diplomacyAndPolitics(),
        scienceAndTechnology()
    ];

    return options[getRandomInt(options.length)];
}

module.exports.randomUpbringing = randomUpbringing;
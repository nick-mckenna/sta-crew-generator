'use strict';

const { getRandomInt } = require("../../misc");
const { anotherSpeciesWorld } = require("./another-species-world");
const { busyColony } = require("./busy-colony");
const { frontierColony } = require("./frontier-colony");
const { homeworld } = require("./homeworld");
const { isolatedColony } = require("./isolated-colony");
const { starshipOrStarbase } = require("./starship-or-starbase");

const getAllEnvironments = () => {

    return [
        homeworld(),
        busyColony(),
        isolatedColony(),
        frontierColony(),
        starshipOrStarbase(),
        anotherSpeciesWorld()
    ];
}

const randomEnvironment = () => {

    const allEnvironments = getAllEnvironments();

    const numberEnvironments = allEnvironments.length;

    const selected = getRandomInt(numberEnvironments);

    return allEnvironments[selected];
}

module.exports.randomEnvironment = randomEnvironment;
'use strict';

const { getRandomInt } = require("../../misc");
const { homeworld } = require("./homeworld");

const getAllEnvironments = () => {

    return [
        homeworld()
    ];
    
}

const randomEnvironment = () => {

    const allEnvironments = getAllEnvironments();

    const numberEnvironments = allEnvironments.length;

    const selected = getRandomInt(numberEnvironments);

    return allEnvironments[selected];
}

module.exports.randomEnvironment = randomEnvironment;
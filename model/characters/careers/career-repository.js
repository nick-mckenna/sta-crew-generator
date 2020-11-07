'use strict';

const { getRandomInt } = require("../../misc");
const { experiencedOfficer } = require("./experienced-officer");
const { veteranOfficer } = require("./veteran-officer");
const { youngOfficer } = require("./young-officer");

const getAllCareers = () => {

    return [
        youngOfficer(),
        experiencedOfficer(),
        veteranOfficer()
    ];
}

const randomCareer = () => {

    const allCareers = getAllCareers();

    const numberCareers = allCareers.length;

    const selected = getRandomInt(numberCareers);

    return allCareers[selected];
}

module.exports.randomCareer = randomCareer;
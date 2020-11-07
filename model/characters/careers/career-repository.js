'use strict';

const { getRandomInt } = require("../../misc");
const { youngOfficer } = require("./young-officer");

const getAllCareers = () => {

    return [
        youngOfficer()
    ];
}

const randomCareer = () => {

    const allCareers = getAllCareers();

    const numberCareers = allCareers.length;

    const selected = getRandomInt(numberCareers);

    return allCareers[selected];
}

module.exports.randomCareer = randomCareer;
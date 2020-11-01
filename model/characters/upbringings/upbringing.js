'use strict';

const { getRandomInt } = require("../../misc");

const acceptanceOptions = () => {

    return {
        accepted: 'Accepted',
        rebelled: 'Rebelled'
    }
}

const randomAcceptanceOption = () => {

    return acceptanceOptions()[getRandomInt(acceptanceOptions().length)];
}

class Upbringing {

    name = '';
    acceptance = acceptanceOptions().accepted;
    focuses = [];

    acceptedAttributesToIncrease = [];
    rebelledAttributesToIncrease = [];
    disciplinesToIncrease = [];
}

module.exports.acceptanceOptions = acceptanceOptions;
module.exports.randomAcceptanceOption = randomAcceptanceOption;
module.exports.Upbringing = Upbringing;
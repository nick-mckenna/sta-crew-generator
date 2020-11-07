'use strict';

const { Talent } = require("../talents/talent");
const { Career } = require("./career");

const experiencedOfficer = () => {

    let career = new Career();

    career.name = 'Experienced Officer';
    career.talent = null;

    return career;
}

module.exports.experiencedOfficer = experiencedOfficer;
'use strict';

const { Talent } = require("../talents/talent");
const { Career } = require("./career");

const youngOfficer = () => {

    let career = new Career();

    career.name = 'Young Officer';
    career.talent = new Talent('Untapped Potential');

    return career;
}

module.exports.youngOfficer = youngOfficer;
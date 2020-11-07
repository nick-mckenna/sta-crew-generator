'use strict';

const { Talent } = require("../talents/talent");
const { Career } = require("./career");

const veteranOfficer = () => {

    let career = new Career();

    career.name = 'Veteran';
    career.talent = new Talent('Veteran');

    return career;
}

module.exports.veteranOfficer = veteranOfficer;
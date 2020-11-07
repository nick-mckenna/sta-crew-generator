'use strict';

const { getRandomInt } = require("../../misc");
const { commandTrack } = require("./command-track");
const { operationsTrack } = require("./operations-track");
const { sciencesTrack } = require("./sciences-track");

const getAllAcademyTracks = () => {

    return [
         commandTrack(),
         operationsTrack(),
         sciencesTrack()
    ];
}

const randomAcademyTrack = () => {

    const allTracks = getAllAcademyTracks();

    const numberTracks = allTracks.length;

    const selected = getRandomInt(numberTracks);

    return allTracks[selected];
}

module.exports.randomAcademyTrack = randomAcademyTrack;
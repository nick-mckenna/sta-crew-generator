'use strict';

const { getRandomInt } = require("../../misc");
const { commandTrack } = require("./command-track");

const getAllAcademyTracks = () => {

    return [
         commandTrack()
    ];
}

const randomAcademyTrack = () => {

    const allTracks = getAllAcademyTracks();

    const numberTracks = allTracks.length;

    const selected = getRandomInt(numberTracks);

    return allTracks[selected];
}

module.exports.randomAcademyTrack = randomAcademyTrack;
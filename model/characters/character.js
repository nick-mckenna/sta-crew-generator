'use strict';

class Character {

    constructor(mainCharacter) {
        this.mainCharacter = mainCharacter;
    }

    name = "unnamed";
    speciesName = "unknown";
    gender = "unknown";
    environmentName = "unknown";
    upbringingName = "unknown";
    upbringingStatus = "unknown";
    academyTrackName = "unknown";
    careerName = "unknown";
    species = null;
    environment = null;
    upbringing = null;
    academyTrack = null;
    career = null;
    careerEventNames = [];

    major = 'unknown';
    minors = [];
    careerEvents = [];
    
    control = 7;
    fitness = 7;
    presence = 7;
    daring = 7;
    insight = 7;
    reason = 7;

    command = 1;
    security = 1;
    science = 1;
    conn = 1;
    engineering = 1;
    medicine = 1;

    stress = 8;

    traits = [];
    talents = [];
    values = [];
    focuses = [];

    mainCharacter = false;
}

module.exports.Character = Character;
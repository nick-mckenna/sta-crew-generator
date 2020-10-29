'use strict';

class Character {

    constructor(mainCharacter) {
        this.mainCharacter = mainCharacter;
    }

    name = "unnamed";
    speciesName = "unknown";
    gender = "unknown";

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

    traits = [];
    talents = [];

    mainCharacter = false;
}

module.exports.Character = Character;
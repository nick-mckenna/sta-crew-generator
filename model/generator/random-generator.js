'use strict';

const { getRandomInt } = require("../misc");

const randomSelection = (options, excluding = []) => {
    
    let found = null;

    while (found == null) {
        let candidate = options[getRandomInt(options.length)];

        if (excluding.includes(candidate) == false) {
            found = candidate;
        }
    }

    return found;
};

module.exports.randomSelection = randomSelection;
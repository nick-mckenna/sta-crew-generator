'use strict';

const { getRandomInt } = require("../misc");

const randomSelection = (options, excluding = []) => {
    
    let found = null;
    const maxAttempts = 20;
    let currentAttempts = 0;

    while (found == null && currentAttempts < maxAttempts) {
        let candidate = options[getRandomInt(options.length)];

        if (excluding.includes(candidate) === false) {
            found = candidate;
        }

        currentAttempts++;
    }

    return found;
};

module.exports.randomSelection = randomSelection;
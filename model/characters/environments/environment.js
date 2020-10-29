'use strict';

class Environment {

    constructor(name, requirements = null, minRequirement = 0) {
        this.name = name;
        this.requirements = requirements;
        this.minRequirement = minRequirement;
    }

    name = '';
    requirements = '';
    minRequirement = 0;
}

module.exports.Talent = Talent;
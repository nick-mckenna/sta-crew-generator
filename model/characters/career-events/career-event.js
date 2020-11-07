'use strict';

class CareerEvent {

    constructor(name, attribute, discipline, focuses) {
        this.name = name;
        this.attribute = attribute;
        this.discipline = discipline;
        this.focuses = focuses;
    }

    name = 'Unknown';
    attribute = 'Unknown';
    discipline = 'Unknown';
    focuses = [];
}

module.exports.CareerEvent = CareerEvent;
'use strict';

const { characterDisciplines } = require("../character-disciplines");
const { AcademyTrack } = require("./academy-track");

const operationsTrack = () => {

    let track = new AcademyTrack();

    track.name = 'Operations Track';
    track.focusOptions = [

        'Computers',
        'Cybernetics',
        'Electro-Plasma Power Systems',
        'Espionage',
        'Hand Phasers',
        'Hand-to-Hand Combat',
        'Infiltration',
        'Interrogation',
        'Shipboard Tactical Systems',
        'Survival',
        'Transporters And Replicators',
        'Warp Field Dynamics'
    ];
    track.majors = [ characterDisciplines().engineering, characterDisciplines().security ];
    track.minors = [ characterDisciplines().engineering, characterDisciplines().medicine,
        characterDisciplines().science, characterDisciplines().security, characterDisciplines().command,
        characterDisciplines().conn ];

    return track;
}

module.exports.operationsTrack = operationsTrack;
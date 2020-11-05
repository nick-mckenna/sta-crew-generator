'use strict';

const { characterDisciplines } = require("../character-disciplines");
const { AcademyTrack } = require("./academy-track");

const commandTrack = () => {

    let track = new AcademyTrack();

    track.name = 'Command Track';
    track.focusOptions = [

        'Astronavigation',
        'Composure',
        'Diplomacy',
        'Extra-Vehicular Activity',
        'Evasive Action',
        'Helm Operations',
        'Inspiration',
        'Persuasion',
        'Small Craft',
        'Starship Recognition',
        'Starfleet Protocols',
        'Team Dynamics'
    ];
    track.majors = [ characterDisciplines().command, characterDisciplines().command ];
    track.minors = [ characterDisciplines().engineering, characterDisciplines().medicine,
        characterDisciplines().science, characterDisciplines().security, characterDisciplines().command,
        characterDisciplines().conn ];

    return track;
}

module.exports.commandTrack = commandTrack;
'use strict';

const { characterDisciplines } = require("../character-disciplines");
const { AcademyTrack } = require("./academy-track");

const sciencesTrack = () => {

    let track = new AcademyTrack();

    track.name = 'Sciences Track';
    track.focusOptions = [

        'Anthropology',
        'Astrophysics',
        'Botany',
        'Computers',
        'Cybernetics',
        'Emergency Medicine',
        'Exo-tectonics',
        'Genetics',
        'Geology',
        'Infectious Diseases',
        'Linguistics',
        'Physics',
        'Psychiatry',
        'Quantum Mechanics',
        'Trauma Surgery',
        'Virology',
        'Warp Field Dynamics',
        'Xenobiology'
    ];
    track.majors = [ characterDisciplines().science, characterDisciplines().medicine ];
    track.minors = [ characterDisciplines().engineering, characterDisciplines().medicine,
        characterDisciplines().science, characterDisciplines().security, characterDisciplines().command,
        characterDisciplines().conn ];

    return track;
}

module.exports.sciencesTrack = sciencesTrack;
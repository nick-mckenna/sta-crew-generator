'use strict';

const characterDisciplines = () => {

    return {

        command: 'Command',
        conn: 'Conn',
        security: 'Security',
        engineering: 'Engineering',
        science: 'Science',
        medicine: 'Medicine'
    };
}

const randomDiscipline = () => {

    const selected = getRandomInt(6);
    let discipline = characterDisciplines().command;
    switch (selected) {

        case 1:
            discipline = characterDisciplines().conn;
        break;

        case 2:
            discipline = characterDisciplines().security;
        break;

        case 3:
            discipline = characterDisciplines().engineering;
        break;

        case 4:
            discipline = characterDisciplines().science;
        break;

        case 5:
            discipline = characterDisciplines().medicine;
        break;
    }

    return discipline;
}

module.exports.characterDisciplines = characterDisciplines;
module.exports.randomDiscipline = randomDiscipline;
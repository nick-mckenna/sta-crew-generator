'use strict';

const { getRandomInt } = require("../../misc");
const { Talent } = require("./talent");

const getAllTalents = () => {

    return [
        new Talent('Bold'),
        new Talent('Cautious'),
        new Talent('Collaboration'),
        new Talent('Constantly Watching'),
        new Talent('Dauntless'),
        new Talent('Personl Effects', 'Main Character'),
        new Talent('Studious'),
        new Talent('Technical Expertise'),
        new Talent('Tough'),
        
        new Talent('Advisor', 'Command', 2),
        new Talent('Defuse The Tension', 'Command', 3),
        new Talent('Follow My Lead', 'Command', 3),
        new Talent('Supervisor', 'Main Character'),
        
        new Talent('Fly-By', 'Conn', 2),
        new Talent('Precise Evasion', 'Conn', 4),
        new Talent('Push The Limits', 'Conn', 4),
        new Talent('Starship Expert', 'Conn', 3),

        new Talent('Close Protection', 'Security', 4),
        new Talent('Interrogation', 'Security', 3),
        new Talent('Mean Right Hook'),
        new Talent('Pack Tactics'),
        new Talent('Quick To Action', 'Security', 3),

        new Talent('A Little More Power', 'Engineering', 3),
        new Talent('I Know My Ship', 'Engineering', 4),
        new Talent('In The Nick Of Time', 'Engineering', 3),
        new Talent('Intense Scrutiny', 'Engineering', 3),
        new Talent('Jury-Rig', 'Engineering', 4),
        new Talent('Testing A Theory', 'Engineering', 2),

        new Talent('Computer Expertise', 'Science', 2),
        new Talent('In The Nick Of Time', 'Science', 3),
        new Talent('Intense Scrutiny', 'Science', 3),
        new Talent('Testing A Theory', 'Science', 2),

        new Talent('Doctor\'s Orders', 'Medicine', 4),
        new Talent('Field Medicine'),
        new Talent('First Response', 'Medicine', 3),
        new Talent('Quick Study', 'Medicine', 3),
        new Talent('Triage', 'Medicine', 3)
    ];
}

const randomTalent = (additionalTalents) => {

    const allTalents = [...getAllTalents(), ...additionalTalents];

    const numberTalents = allTalents.length;

    const selected = getRandomInt(numberTalents);

    return allTalents[selected];
}

module.exports.getAllTalents = getAllTalents;
module.exports.randomTalent = randomTalent;